// Componente filho do App: recebe a página atual, uma função para trocar de página,
// o usuário logado (ou null) e as funções de abrir o modal de login e de logout.
function Nav({ paginaAtual, onNavegar, usuarioLogado, onAbrirLogin, onLogout }) {
  const paginas = [
    { id: 'home', label: 'Home' },
    { id: 'projeto', label: 'Projeto' },
    { id: 'sobre', label: 'Sobre' },
  ];

  return (
    <ul className="sticky" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
      <div style={{ display: 'flex' }}>
        {paginas.map((pagina) => (
          <li key={pagina.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavegar(pagina.id);
              }}
              style={{ fontWeight: paginaAtual === pagina.id ? 'bold' : 'normal' }}
            >
              {pagina.label}
            </a>
          </li>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {usuarioLogado ? (
          <>
            <li>
              <span style={{ color: '#00ff7f', padding: '14px 10px', display: 'block' }}>
                👤 {usuarioLogado}
              </span>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }} style={{ color: '#ff4d4d', fontWeight: 'bold' }}>
                [ Sair ]
              </a>
            </li>
          </>
        ) : (
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onAbrirLogin(); }}>
              Login / Cadastro
            </a>
          </li>
        )}
      </div>
    </ul>
  );
}

export default Nav;
