import { integrantes } from '../../data/integrantes';

function Contato() {
  return (
    <section id="contato" className="scroll-mt-20 bg-surface py-[60px] md:py-[100px]">
      <div className="mx-auto w-[90%] max-w-[1100px]">
        <h2 className="mb-[15px] border-b-2 border-muted pb-2.5 font-title text-[28px] font-normal uppercase tracking-[2px] text-light md:mb-[25px] md:text-[42px]">
          Contato
        </h2>
        <p className="mb-10 text-base text-muted">Entre em contato com os integrantes da equipe CloudCore.</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5 md:gap-[25px]">
          {integrantes.map((p) => (
            <article
              key={p.rm}
              className="rounded-lg border-l-[3px] border-primary bg-[#101116] p-5 transition-colors duration-300 hover:border-secondary md:p-[25px]"
            >
              <h3 className="mb-1 text-lg font-semibold text-light">{p.nome}</h3>
              <span className="mb-[15px] inline-block text-xs font-bold tracking-[1px] text-primary">RM: {p.rm}</span>
              <p className="mb-[15px] text-sm text-muted">{p.funcao}</p>
              <a href={`mailto:${p.email}`} className="break-all text-sm text-light transition-colors hover:text-primary">
                {p.email}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contato;