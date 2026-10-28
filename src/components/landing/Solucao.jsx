import moduloAutomatico from '../../assets/images/modulo-automatico.png';

function Solucao() {
  return (
    <section id="solucao" className="scroll-mt-20">
      <div className="mx-auto flex w-full max-w-[940px] flex-col items-center justify-between gap-[45px] px-6 py-[70px] md:flex-row md:px-0 md:pb-[100px] md:pt-[50px]">
        <img
          src={moduloAutomatico}
          alt="Tela do módulo automático da câmera Jovi"
          className="h-[380px] w-full max-w-[380px] rounded-[5px] object-cover md:h-[480px] md:w-[380px] md:shadow-[2px_2px_10px_#0b0c10bf,20px_20px_0_#393fe65f]"
        />
        <div className="w-full md:w-1/2">
          <h2 className="mb-[15px] border-b-2 border-muted font-title text-[28px] font-normal uppercase tracking-[2px] text-light md:mb-5 md:text-[42px]">
            Inicial OCR+
          </h2>
          <p className="mb-[15px] text-[15px] leading-[1.7] text-muted md:text-base md:leading-[1.75]">
            Uma maneira mais simples de utilizar a capacidade total da sua câmera guiada por perguntas que auxilia na
            escolha das melhores opções de processamento.
          </p>
          <p className="mb-[15px] text-[15px] leading-[1.7] text-muted md:text-base md:leading-[1.75]">
            Já a função OCR é executada automaticamente para identificar e transcrever textos presentes em imagens,
            PDFs, arquivos TXT e outros formatos compatíveis.
          </p>
          <blockquote className="mt-5 border-l-[3px] border-primary pl-[15px] text-base italic leading-normal text-light md:mt-[30px] md:pl-5 md:text-xl">
            Suas fotos configuradas da maneira que você quer e textos capturados de forma rápida e eficiente.
          </blockquote>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1100px] px-6 pb-[70px] pt-[30px] md:w-[90%] md:px-0 md:pb-[100px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          <p className="rounded-r-lg border-l-[3px] border-primary bg-[#101116] p-5 text-[15px] leading-[1.7] text-muted md:p-[25px] md:text-base md:leading-[1.8]">
            Para otimizar a experiência do usuário, os Smartphones Jovi oferecerão inteligência e praticidade.
          </p>
          <p className="rounded-r-lg border-l-[3px] border-primary bg-[#101116] p-5 text-[15px] leading-[1.7] text-muted md:p-[25px] md:text-base md:leading-[1.8]">
            Conseguirá ajustar as fotos via Modo inicial e extrair ou traduzir textos usando OCR.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Solucao;