import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import Projeto from './pages/Projeto';
import Sobre from './pages/Sobre';
import { useAuth } from './hooks/useAuth';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home');
  const [modalAberto, setModalAberto] = useState(false);
  const auth = useAuth();

  function renderizarPagina() {
    switch (paginaAtual) {
      case 'projeto':
        return <Projeto onIrParaSobre={() => setPaginaAtual('sobre')} />;
      case 'sobre':
        return <Sobre onVoltarParaProjeto={() => setPaginaAtual('projeto')} />;
      default:
        return <Home onIrParaProjeto={() => setPaginaAtual('projeto')} />;
    }
  }

  return (
    <>
      <Header titulo="CHALLENGE SPRINT 3" />
      <Nav
        paginaAtual={paginaAtual}
        onNavegar={setPaginaAtual}
        usuarioLogado={auth.usuarioLogado}
        onAbrirLogin={() => setModalAberto(true)}
        onLogout={auth.logout}
      />

      {renderizarPagina()}

      <LoginModal visivel={modalAberto} onFechar={() => setModalAberto(false)} auth={auth} />
    </>
  );
}

export default App;
