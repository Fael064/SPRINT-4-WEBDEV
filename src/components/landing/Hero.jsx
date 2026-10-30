import jovicell from '../../assets/images/jovicell.jpg';

function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-[80vh] items-end justify-center px-6 py-10 text-center md:h-[93vh] md:justify-start md:px-[100px] md:py-[70px] md:text-left"
      style={{
        backgroundImage: `linear-gradient(180deg, #0b0c1026 0%, #0b0c108c 70%, #0b0c10 100%), url(${jovicell})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <h1 className="font-title text-[42px] uppercase leading-none tracking-[1px] text-light md:text-[100px] md:tracking-[3px]">
          CloudCore
          <span className="mt-2.5 block font-text text-lg font-semibold normal-case italic md:mt-5 md:text-4xl">
            Inicial OCR+
          </span>
        </h1>
        <p className="my-5 text-[15px] leading-relaxed text-muted md:my-6 md:max-w-[40%] md:text-[17px]">
          Uma nova função que irá automatizar seu celular e deixar a sua câmera do jeito que você gosta.
        </p>
        <a
          href="#solucao"
          className="block w-full rounded-[5px] bg-primary px-6 py-4 text-center text-sm font-semibold uppercase text-light transition duration-200 hover:translate-x-1 hover:scale-105 hover:bg-secondary focus:bg-secondary focus:outline-none md:w-fit"
        >
          Conhecer
        </a>
      </div>
    </section>
  );
}

export default Hero;
