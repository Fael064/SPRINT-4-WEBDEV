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
                setHistorico(dados);          
           }    catch (e) {
                setErro(e.message);
           }    finally {
                setCarregando(false);
           }
        }
        carregar();
    }, []);

    return { historico, carregando, erro };
}