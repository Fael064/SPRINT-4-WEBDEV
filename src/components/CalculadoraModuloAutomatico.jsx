import { useState } from 'react';
import { useHistorico } from '../hooks/useHistorico';

const MAX_HISTORICO = 8;


// Esse componente transforma em número real a ideia que já existia no protótipo da Sprint 2
// ("perguntas de preferência ajustam a câmera automaticamente"), usando Math para calcular
// ISO e abertura sugeridos, e localStorage para guardar um histórico dos últimos cálculos.
function CalculadoraModuloAutomatico() {
  const [poucaLuz, setPoucaLuz] = useState(false);
  const [fundoDesfocado, setFundoDesfocado] = useState(false);
  const [coresVivas, setCoresVivas] = useState (false);
  const [resultado, setResultado] = useState(null);
  const { historico, carregando, erro, adicionar, limpar } = useHistorico();

  function calcularConfiguracao() {
    // ISO base ajustado conforme a luz do ambiente
    let isoBase = 100;
    if (poucaLuz) isoBase += 300;

    // Pequena variação aleatória, simulando a leitura real do sensor de luz
    const variacaoSensor = Math.round(Math.random() * 50);

    // Arredonda para o múltiplo de 50 mais próximo e limita entre 100 e 3200
    let isoFinal = Math.round((isoBase + variacaoSensor) / 50) * 50;
    isoFinal = Math.min(6400, Math.max(100, isoFinal));

    // Abertura sugerida: menor valor (mais aberta) se o usuário quer fundo desfocado
    const abertura = fundoDesfocado ? 1.8 : 4.0;
    let saturacao = coresVivas ? 130 : 85;
    saturacao = Math.min(150, Math.max (60, saturacao));

    const novoResultado = {
      iso: isoFinal,
      abertura,
      saturacao,
      timestamp: new Date().toLocaleTimeString('pt-BR'),
    };

    setResultado(novoResultado);

    // Mantém só os últimos MAX_HISTORICO cálculos
    adicionar((novoResultado) => {
      const atualizado = [novoResultado, ...atual];
      return atualizado.slice(0, MAX_HISTORICO);
    });
  }

  return (
    <div className="calculadora-modulo">
      <h2 className="topicos-escuro">Simulador do módulo automático</h2>
      <p className="descricao-calculadora">
        Responda as perguntas de preferência e veja o ISO e a abertura que a câmera sugeriria automaticamente.
      </p>

      <div className="calculadora-perguntas">
        <label className="calculadora-checkbox">
          <input type="checkbox" checked={poucaLuz} onChange={(e) => setPoucaLuz(e.target.checked)} />
          Costumo fotografar em ambientes com pouca luz
        </label>
        <label className="calculadora-checkbox">
          <input type="checkbox" checked={fundoDesfocado} onChange={(e) => setFundoDesfocado(e.target.checked)} />
          Prefiro fotos com fundo desfocado
        </label>
        <label className="calculadora-checkbox">
   	  <input type="checkbox" checked={coresVivas} onChange={(e) => setCoresVivas(e.target.checked)} />
          Prefiro fotos com cores mais vivas e saturadas
</label>
      </div>

      <button type="button" className="login-btn-submit calculadora-botao" onClick={calcularConfiguracao}>
        Calcular configuração
      </button>

      {resultado && (
        <div className="calculadora-resultado">
          <strong>ISO sugerido:</strong> {resultado.iso} &nbsp;|&nbsp; <strong>Abertura:</strong> f/{resultado.abertura} &nbsp;|&nbsp; <strong>Saturação: </strong> {resultado.saturacao}%
        </div>
      )}

        <div className="calculadora-historico">
          <div className="calculadora-historico-cabecalho">
            <h3>Histórico de cálculos ({historico.length}/{MAX_HISTORICO})</h3>
            {historico.length > 0 && (
              <button type="button" className="calculadora-limpar" onClick={limpar}>Limpar</button>
            )}
          </div>
          {historico.length === 0 ? (
            <p className="calculadora-vazio">Nenhum cálculo ainda, teste acima!</p>
          ) : (
            <ul>
            {historico.map((item, indice) => (
              <li key={indice}>
                {item.timestamp} — ISO {item.iso}, f/{item.abertura}, sat. {item.saturacao}%
              </li>
            ))}
          </ul>
        )}
        </div>
    </div>
  );
}

export default CalculadoraModuloAutomatico;
