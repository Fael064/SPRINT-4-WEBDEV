import { useState, useEffect } from 'react';

const API_URL = 'https://6adfbb7f8e42963c8d5e5332.mockapi.io/Historico';

export function useHistorico() {
    const [historico, setHistorico] = useState ([]);
    const [carregando, setCarregando] = useState (true);
    const [erro, setErro] = useState(null);

    useEffect (() => {
        async function carregar() {
            try {
                const resposta = await fetch(API_URL);
                if (!resposta.ok) throw new Error ('Erro ao buscar histórico');
                const dados = await resposta.json();
                setHistorico(dados.reverse());          
           }    catch (e) {
                setErro(e.message);
           }    finally {
                setCarregando(false);
           }
        }
        carregar();
    }, []);

    async function adicionar(item) {
        try {
            setErro(null);
            const resposta = await fetch (API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item),
            });
            if (!resposta.ok) {
                const texto = await resposta.text();
                throw new Error(`Erro ao salvar o cálculo (${resposta.status}): ${texto}`);
            } 
            
            const criado = await resposta.json();
            setHistorico ((atual) => [criado, ...atual]);
        }   catch (e) {
            setErro(e.message);
        }
    }

    async function limpar () {
        try {
            setErro(null);
            await Promise.all (
                historico.map((item) => fetch(`${API_URL}/${item.id}`, {method: 'DELETE'}))
            );
            setHistorico([]);
        }   catch (e) {
            setErro(e.message);
        }
    }

    return { historico, carregando, erro, adicionar, limpar};
}