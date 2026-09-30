import jovi from '../assets/imagens/JOVI.png';
import fiap from '../assets/imagens/FIAP.png';
import Footer from '../components/Footer';

function Sobre({ onVoltarParaProjeto }) {
  return (
    <>
      <div className="empresas">
        <h1 id="parceria">Parcerias CloudCore</h1>
        <img src={jovi} alt="JOVI" />
        <img src={fiap} alt="FIAP" />

        <div className="apresentacao">
          <p>
            Nós da CloudCore estamos orgulhosos de apresentar nossa parceria com nossa instituição de ensino FIAP
            e empresa parceira para o challenge JOVI.
          </p>
          <p>Com nosso projeto solucionaremos as dores que existem dos usuários dos smartphones.</p>
          <p>Queremos agregar valor e trazer inovação ao mercado, com o intuito de oferecer melhores experiências ao usuário!</p>
        </div>
      </div>

      <Footer texto="Página anterior" onClick={onVoltarParaProjeto} />
    </>
  );
}

export default Sobre;
