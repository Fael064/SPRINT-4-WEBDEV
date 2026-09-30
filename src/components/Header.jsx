import cloudcoreLogo from '../assets/imagens/CloudCore.png';

// Componente "pai": recebe o título da página como prop e o repassa junto do logo fixo do projeto
function Header({ titulo }) {
  return (
    <header>
      <img id="cloudcore-logo" src={cloudcoreLogo} alt="CloudCore" />
      <a className="titulo">{titulo}</a>
    </header>
  );
}

export default Header;
