import { useState } from 'react';
import Menu from './components/landing/Menu';
import Rodape from './components/landing/Rodape';
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
      <div className="flex min-h-screen flex-col">
        <Menu
          usuarioLogado={auth.usuarioLogado}
          onAbrirLogin={() => setModalAberto(true)}
          onLogout={auth.logout}
        />

        <main className="flex-1">
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
        </main>

        <Rodape />
        </div>

        <LoginModal visivel={modalAberto} onFechar={() => setModalAberto(false)} auth={auth} />
    </>
  );
}

export default App;
