import { Link } from 'react-router-dom';

const secoes = [
  { id: 'solucao', rotulo: 'A Solução' },
  { id: 'publico', rotulo: 'Público-Alvo' },
  { id: 'galeria', rotulo: 'Galeria' },
  { id: 'equipe', rotulo: 'Nossa Equipe' },
  { id: 'contato', rotulo: 'Contato' },
];

const classeLink =
  'cursor-pointer border-b-[3px] border-transparent px-2 py-1.5 text-[11px] font-bold uppercase tracking-[1px] text-light transition-colors duration-500 hover:border-primary focus:border-primary focus:outline-none md:mx-2 md:px-1 md:py-2 md:text-sm md:tracking-[2px]';

function Menu({ usuarioLogado, onAbrirLogin, onLogout }) {
  return (
    <header className="fixed top-0 z-10 w-full bg-dark/70 px-2.5 py-4 backdrop-blur-md">
      <nav aria-label="Principal" className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
        {secoes.map((s) => (
          <Link key={s.id} to={`/#${s.id}`} className={classeLink}>
            {s.rotulo}
          </Link>
        ))}
        <Link to="/simulador" className={classeLink}>
          Simulador
        </Link>
        {usuarioLogado ? (
          <>
            <span className="px-2 text-[11px] text-muted md:text-sm">👤 {usuarioLogado}</span>
            <button type="button" onClick={onLogout} className={classeLink}>
              Sair
            </button>
          </>
        ) : (
          <button type="button" onClick={onAbrirLogin} className={classeLink}>
            Login / Cadastro
          </button>
        )}
      </nav>
    </header>
  );
}

export default Menu;