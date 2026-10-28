import ocr1 from '../../assets/images/OCR1.png';
import inicial1 from '../../assets/images/inicial1.png';
import ocr2 from '../../assets/images/OCR2.png';
import modulo from '../../assets/images/modulo-automatico.png';

const imagens = [
    {src: ocr1, alt: 'Exemplo da função OCR', legenda: 'Função OCR'},
    {src: inicial1, alt: 'Exemplo do modo inicial', legenda: 'Modo inicial'},
    {src: ocr2, alt: 'Exemplo de captura OCR', legenda: 'Captura OCR'},
    {src: modulo, alt: 'Exemplo do módulo automático', legenda: 'Módulo automático'},
]

function Galeria() {
  return (
    <section id="galeria" className="mx-auto w-full max-w-[1100px] scroll-mt-20 px-6 pb-[70px] md:w-[90%] md:px-0 md:pb-[100px]">
      <h2 className="mb-[15px] border-b-2 border-muted pb-2.5 font-title text-[28px] font-normal uppercase tracking-[2px] text-light md:mb-[25px] md:text-[42px]">
        Galeria
      </h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-3.5">
        {imagens.map((img) => (
          <figure key={img.legenda}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover opacity-90 transition duration-300 hover:scale-[1.03] hover:opacity-100 md:h-[210px]"
            />
            <figcaption className="mt-2 text-xs text-muted">{img.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Galeria;
