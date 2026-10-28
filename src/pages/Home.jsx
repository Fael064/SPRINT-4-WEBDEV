import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/landing/Hero';
import Solucao from '../components/landing/Solucao';
import PublicoAlvo from '../components/landing/PublicoAlvo';
import Galeria from '../components/landing/Galeria';
import Equipe from '../components/landing/Equipe';
import Contato from '../components/landing/Contato';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Solucao />
      <PublicoAlvo />
      <Galeria />
      <Equipe />
      <Contato />
    </>
  );
}
export default Home;
