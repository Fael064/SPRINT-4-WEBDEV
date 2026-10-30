import { integrantes } from '../../data/integrantes';

function Equipe() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-dark px-6 py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="mb-[25px] border-b-2 border-muted pb-2.5 font-title text-[28px] font-normal uppercase tracking-[2px] text-light md:mb-[40px] md:text-[42px]">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 gap-[25px] sm:grid-cols-2 md:gap-x-[60px] md:gap-y-[50px] lg:grid-cols-3">
          {integrantes.map((p) => (
            <figure key={p.rm}>
              <img
                src={p.foto}
                alt={`Foto de ${p.nome}`}
                loading="lazy"
                className="block h-[220px] w-full rounded-[10px] border-2 border-dark object-cover hover:outline-2 hover:outline-primary md:h-[240px]"
              />
              <figcaption className="mt-3 border-l-[3px] border-primary pl-4 text-base font-semibold uppercase italic text-light md:text-xl">
                {p.nome.split(' ')[0]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipe;