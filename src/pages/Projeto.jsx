import sistemaOcr from '../assets/imagens/sistema-ocr.png';
import moduloAutomatico from '../assets/imagens/modulo-automatico.png';
import mvp from '../assets/imagens/MVP.jpeg';
import Footer from '../components/Footer';

function Projeto({ onIrParaSobre }) {
  return (
    <>
      <header id="ocr" className="header-topico">
        <h2 className="topicos">Módulo automático e OCR (Optical Character Recognition)</h2>
      </header>

      <header className="containerIntro">
        <p>
          Nosso objetivo é melhorar a experiência do usuário, por isso, o módulo automático é uma funcionalidade
          que permite que a câmera ajuste automaticamente as configurações de acordo com o ambiente e as
          condições de iluminação. O OCR (Optical Character Recognition) é uma tecnologia que permite reconhecer
          e extrair texto de imagens, o que pode ser útil para digitalizar documentos ou traduzir textos em tempo
          real. Com essas funcionalidades, os usuários podem aproveitar ao máximo a qualidade da câmera dos
          Smartphones Jovi e ter uma experiência mais intuitiva e eficiente.
        </p>
      </header>

      <header id="como-faremos" className="header-topico">
        <h2 className="topicos">Como faremos isso?</h2>
      </header>

      <header className="containerIntro">
        <p>
          Com perguntas básicas de preferências ao usuário sem utilizar termos técnicos, será feita uma
          configuração automática da câmera, onde o usuário pode escolher entre as opções de preferências, como:
          "Gosta de tirar fotos em ambientes com pouca luz?" ou "Prefere fotos com fundo desfocado?". Com base
          nas respostas do usuário, a câmera ajustará automaticamente as configurações para otimizar a qualidade
          das fotos e vídeos, proporcionando uma experiência personalizada e satisfatória.
        </p>
        <p>
          Já o modo OCR será ativado automaticamente quando a câmera detectar um documento ou texto em cena,
          permitindo que o usuário digitalize ou traduza o texto de forma rápida e fácil, sem a necessidade de
          configurar manualmente as opções de OCR. Dessa forma, os usuários podem aproveitar ao máximo as
          funcionalidades da câmera dos Smartphones Jovi, tornando a experiência mais intuitiva e eficiente.
        </p>
      </header>

      <h2 className="topicos">Imagens ilustrativas das funcionalidades</h2>
      <div className="ilustracao">
        <img src={sistemaOcr} alt="Sistema OCR" />
        <img src={moduloAutomatico} alt="Módulo automático" />
      </div>

      <h1>MVP</h1>
      <div className="ilustracao">
        <img src={mvp} alt="MVP" />
      </div>

      <Footer texto="Próxima página" onClick={onIrParaSobre} />
    </>
  );
}

export default Projeto;
