import { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import Projeto from './pages/Projeto';
import Sobre from './pages/Sobre';
import { useAuth } from './hooks/useAuth';

function App() {
  const navigate = useNavigate();
  const [modalAberto, setModalAberto] = useState(false);
  const auth = useAuth();

  return (
    <>
      <Header titulo="CHALLENGE SPRINT 3" />
      <Nav
        usuarioLogado={auth.usuarioLogado}
        onAbrirLogin={() => setModalAberto(true)}
        onLogout={auth.logout}
      />

      <Routes>
        <Route path="/" element={<Home onIrParaProjeto={() => navigate('/projeto')} />} />
        <Route path="/projeto" element={<Projeto onIrParaSobre={() => navigate('/sobre')} />} />
        <Route path="/sobre" element={<Sobre onVoltarParaProjeto={() => navigate('/projeto')} />} />
      </Routes>

      <LoginModal visivel={modalAberto} onFechar={() => setModalAberto(false)} auth={auth} />
    </>
  );
}

export default App;
