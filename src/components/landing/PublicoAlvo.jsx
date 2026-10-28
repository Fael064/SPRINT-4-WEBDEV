const insights = [
  { numero: '01', titulo: 'Leitura inteligente', texto: 'Transforme documentos e imagens em informações digitais de forma rápida.' },
  { numero: '02', titulo: 'OCR automático', texto: 'Extraia e transcreva textos sem depender de processos manuais.' },
  { numero: '03', titulo: 'Mais praticidade', texto: 'Menos etapas para realizar tarefas que antes exigiam mais tempo.' },
];

function PublicoAlvo() {
  return (
    <section id="publico" className="mx-auto w-full max-w-[1100px] scroll-mt-20 px-6 py-[70px] md:w-[90%] md:px-0 md:py-[100px]">
      <h2 className="mb-[15px] border-b-2 border-muted pb-2.5 font-title text-[28px] font-normal uppercase tracking-[2px] text-light md:mb-[25px] md:text-[42px]">
        Público-Alvo
      </h2>
      <p className="mb-[30px] max-w-[500px] text-[15px] leading-[1.7] text-muted md:mb-10 md:text-[17px]">
        Tecnologia pensada para quem busca mais praticidade, velocidade e inteligência no tratamento de informações.
      </p>
      <ul className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-8">
        {insights.map((i) => (
          <li key={i.numero} className="flex items-start gap-[15px] border-t border-white/10 py-[18px] md:gap-5 md:py-5">
            <span className="min-w-[25px] pt-1 text-[11px] font-bold tracking-[2px] text-primary md:text-[13px]">{i.numero}</span>
            <div>
              <h3 className="mb-[7px] text-sm font-semibold uppercase tracking-[1px] text-light md:text-[15px] md:tracking-[1.5px]">
                {i.titulo}
              </h3>
              <p className="text-[13px] leading-[1.6] text-muted md:text-sm">{i.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PublicoAlvo;