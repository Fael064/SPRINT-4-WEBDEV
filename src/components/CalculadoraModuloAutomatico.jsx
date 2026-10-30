import { useState } from 'react';
import { useHistorico } from '../hooks/useHistorico';

const MAX_HISTORICO = 8;


// Esse componente transforma em número real a ideia que já existia no protótipo da Sprint 2
// ("perguntas de preferência ajustam a câmera automaticamente"), usando Math para calcular
// ISO e abertura sugeridos, e uma API (MockAPI) para guardar o histórico dos cálculos.
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

    // Arredonda para o múltiplo de 50 mais próximo e limita a 6400.
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

    
    adicionar(novoResultado);
  }

  return (
    <div className="mx-auto mb-[70px] w-[90%] max-w-[900px] rounded-lg border-l-[3px] border-primary bg-[#101116] p-5 md:mb-[100px] md:p-[30px]">
      <h2 className="mb-[15px] border-b-2 border-muted pb-2.5 font-title text-[28px] font-normal uppercase tracking-[2px] text-light md:text-[42px]">Simulador do módulo automático</h2>
      <p className="mb-6 text-[15px] leading-[1.7] text-muted md:text-base">
        Responda as perguntas de preferência e veja o ISO e a abertura que a câmera sugeriria automaticamente.
      </p>

      <div className="mb-6 flex flex-col gap-3">
        <label className="flex cursor-pointer items-center gap-3 text-[15px] text-light">
          <input type="checkbox" className="size-4 accent-primary" checked={poucaLuz} onChange={(e) => setPoucaLuz(e.target.checked)} />
          Costumo fotografar em ambientes com pouca luz
        </label>
        <label className="flex cursor-pointer items-center gap-3 text-[15px] text-light">
          <input type="checkbox" className="size-4 accent-primary" checked={fundoDesfocado} onChange={(e) => setFundoDesfocado(e.target.checked)} />
          Prefiro fotos com fundo desfocado
        </label>
        <label className="flex cursor-pointer items-center gap-3 text-[15px] text-light">
   	  <input type="checkbox" className="size-4 accent-primary" checked={coresVivas} onChange={(e) => setCoresVivas(e.target.checked)} />
          Prefiro fotos com cores mais vivas e saturadas
</label>
      </div>

      <button type="button" className="w-full cursor-pointer rounded-[5px] bg-primary px-6 py-4 text-sm font-semibold uppercase text-light transition duration-200 hover:bg-secondary focus:bg-secondary focus:outline-none md:w-fit" onClick={calcularConfiguracao}>
        Calcular configuração
      </button>

      {resultado && (
        <div className="mt-6 rounded-lg border-l-[3px] border-primary bg-dark p-4 text-[15px] text-light">
          <strong>ISO sugerido:</strong> {resultado.iso} &nbsp;|&nbsp; <strong>Abertura:</strong> f/{resultado.abertura} &nbsp;|&nbsp; <strong>Saturação: </strong> {resultado.saturacao}%
        </div>
      )}

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[1.5px] text-light">Histórico de cálculos ({Math.min(historico.length, MAX_HISTORICO)}/ {MAX_HISTORICO})</h3>
            {historico.length > 0 && (
              <button type="button" className="cursor-pointer rounded-[5px] border border-red-400 px-3 py-1 text-xs text-red-400 transition-colors hover:bg-red-400 hover:text-dark" onClick={limpar}>Limpar</button>
            )}
          </div>

          {carregando && <p className="mt-2.5 text-sm italic text-muted">Carregando histórico...</p>}
          {erro && <p className="mt-2.5 text-sm italic text-muted">Erro: {erro}</p>}
          
          {!carregando && historico.length === 0 ? (
            <p className="mt-2.5 text-sm italic text-muted">Nenhum cálculo ainda, teste acima!</p>
          ) : (
            <ul className="divide-y divide-white/10">
            {historico.slice(0, MAX_HISTORICO).map((item) => (
              <li key={item.id} className="py-2 text-sm text-muted">
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
