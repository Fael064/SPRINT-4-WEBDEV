import { useState } from 'react';

function LoginModal({ visivel, onFechar, auth }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [modoCadastro, setModoCadastro] = useState(false);
  const [feedback, setFeedback] = useState(null); // { tipo, mensagem }

  if (!visivel) return null;

  function handleEmailChange(e) {
    const valor = e.target.value;
    setEmail(valor);
    setFeedback(null);

    if (valor.trim() === '') {
      setModoCadastro(false);
      return;
    }
    const { existe } = auth.verificarEmail(valor);
    setModoCadastro(!existe);
    if (existe) {
      setFeedback({ tipo: 'success', mensagem: 'Atenção: Usuário já cadastrado no sistema!' });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !senha) {
      setFeedback({ tipo: 'danger', mensagem: 'Por favor, preencha todos os campos!' });
      return;
    }

    if (modoCadastro) {
      const nomeUsuario = window.prompt('Este é seu primeiro acesso! Como gostaria de ser chamado(a)?');
      if (!nomeUsuario || !nomeUsuario.trim()) {
        setFeedback({ tipo: 'danger', mensagem: 'Cadastro cancelado pelo usuário.' });
        return;
      }
      const resultado = auth.cadastrar(email, senha, nomeUsuario);
      setFeedback({ tipo: resultado.sucesso ? 'success' : 'danger', mensagem: resultado.mensagem });
      if (resultado.sucesso) {
        setTimeout(() => {
          resetarFormulario();
          onFechar();
        }, 1200);
      }
    } else {
      const resultado = auth.login(email, senha);
      setFeedback({ tipo: resultado.sucesso ? 'success' : 'danger', mensagem: resultado.mensagem });
      if (resultado.sucesso) {
        setTimeout(() => {
          resetarFormulario();
          onFechar();
        }, 1000);
      } else {
        setSenha('');
      }
    }
  }

  function resetarFormulario() {
    setEmail('');
    setSenha('');
    setModoCadastro(false);
    setFeedback(null);
  }

  const titulo = modoCadastro ? 'Criar sua Conta' : email.trim() ? 'Conta Encontrada' : 'Identifique-se';
  const textoBotao = modoCadastro ? 'Cadastrar e Entrar' : 'Entrar';
  const textoInfo = modoCadastro
    ? 'Não encontramos seu e-mail. Defina uma senha para seu primeiro cadastro.'
    : email.trim()
      ? 'Este e-mail já possui cadastro. Insira a senha correta para entrar.'
      : 'Digite seu e-mail para verificar seu status.';

  return (
    <div className="modal-backdrop-custom" onClick={onFechar}>
      <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-custom">
          <h5>{titulo}</h5>
          <button type="button" className="btn-close-custom" onClick={onFechar}>×</button>
        </div>
        <div className="modal-body-custom">
          {feedback && (
            <div className={`alert alert-${feedback.tipo}`} role="alert">
              {feedback.mensagem}
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field-group">
              <label htmlFor="corporate-email">Digite seu e-mail</label>
              <input
                type="email"
                id="corporate-email"
                placeholder="nome@empresa.com.br"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="login-field-group">
              <div className="login-label-row">
                <label htmlFor="login-password">Senha</label>
                <a href="#" className="login-forgot-link">Esqueceu a senha?</a>
              </div>
              <div className="login-password-wrapper">
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  id="login-password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <span className="login-toggle-password" onClick={() => setMostrarSenha(!mostrarSenha)}>
                  {mostrarSenha ? '🙈' : '👁️'}
                </span>
              </div>
            </div>

            <div className="login-remember-group">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Lembrar-me</label>
            </div>

            <button type="submit" className="login-btn-submit">
              <span>{textoBotao}</span>
              <span className="login-btn-arrow">→</span>
            </button>
          </form>

          <p className="login-footer-text">{textoInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
