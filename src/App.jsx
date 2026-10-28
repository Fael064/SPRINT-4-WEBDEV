import { useState } from 'react';
import Menu from './components/landing/Menu';
import { Routes, Route } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import { useAuth } from './hooks/useAuth';
import RotaPrivada from './components/RotaPrivada';
import Simulador from './pages/Simulador';

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const auth = useAuth();

  return (
    <>
      <Menu
        usuarioLogado={auth.usuarioLogado}
        onAbrirLogin={() => setModalAberto(true)}
        onLogout={auth.logout}
      />

      <Routes>
        <Route path="/" element={<Home />} />         
        
        <Route
          path="/simulador"
          element={
            <RotaPrivada usuarioLogado={auth.usuarioLogado}>
              <Simulador />
            </RotaPrivada>
          }
        />
      </Routes>

      <LoginModal visivel={modalAberto} onFechar={() => setModalAberto(false)} auth={auth} />
    </>
  );
}

export default App;
