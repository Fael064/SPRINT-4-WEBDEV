import telaJovi from '../assets/imagens/tela-jovi.webp';
import videoJovi from '../assets/imagens/videojovi.mp4';
import Footer from '../components/Footer';

function Home({ onIrParaProjeto }) {
  return (
    <>
      <h1>Introdução</h1>
      <div className="containerIntro">
        <p>
          O desafio proposto é desenvolver uma interface de câmera para os Smartphones Jovi, utilizando as
          tecnologias de módulo automático e OCR (Optical Character Recognition). O objetivo é criar uma
          experiência de usuário intuitiva e eficiente, permitindo que os usuários aproveitem ao máximo a
          qualidade da câmera dos Smartphones Jovi.
        </p>
        <p>
          A interface deve ser fácil de usar, com recursos avançados de fotografia e reconhecimento de texto,
          proporcionando uma experiência única e inovadora para os usuários. Nesse projeto vamos apresentar a
          interface visual da câmera e mostrar com imagens o protótipo de como essas funcionalidades podem ser
          implementadas.
        </p>
      </div>

      <header id="interface-visual" className="header-topico">
        <h2 className="topicos">Interface visual da câmera</h2>
      </header>

      <header className="containerIntro">
        <p>
          Nessa parte apresentamos os modos de exibição da câmera, onde o usuário pode escolher entre os modos
          que deseja: Foto, Vídeo, Cinema, Retrato entre outros. Cada modo de exibição tem uma funcionalidade
          específica, com cores e elementos visuais que exploram o máximo da qualidade incrível da câmera dos
          Smartphones Jovi.
        </p>
      </header>

      <section className="interface">
        <div className="midia-card">
          <video src={videoJovi} controls loop autoPlay muted />
        </div>
        <div className="midia-card">
          <img src={telaJovi} alt="Interface JOVI" />
        </div>
      </section>

      <Footer texto="Próxima página" onClick={onIrParaProjeto} />
    </>
  );
}

export default Home;
