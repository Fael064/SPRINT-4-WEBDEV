import { useState } from 'react';

// Hook que porta 1:1 a lógica que já existia em script.js na Sprint 2,
// só que agora vive em estado do React em vez de manipular o DOM diretamente.
export function useAuth() {
  const [usuarioLogado, setUsuarioLogado] = useState(
    () => sessionStorage.getItem('usuarioLogado') || null
  );

  // Verifica se um e-mail já tem cadastro salvo no localStorage
  function verificarEmail(email) {
    const emailValue = email.trim().toLowerCase();
    if (!emailValue) return { existe: false };
    const usuarioExistente = localStorage.getItem(emailValue);
    return { existe: !!usuarioExistente };
  }

  // Cadastra um novo usuário (senha + nome de usuário) no localStorage
  function cadastrar(email, senha, nomeUsuario) {
    const emailValue = email.trim().toLowerCase();
    if (localStorage.getItem(emailValue)) {
      return { sucesso: false, mensagem: 'Erro: Você já possui um cadastro com este e-mail!' };
    }
    if (senha.length < 4) {
      return { sucesso: false, mensagem: 'Para sua segurança, crie uma senha com pelo menos 4 caracteres.' };
    }

    const dadosUsuario = { senha, username: nomeUsuario.trim() };
    localStorage.setItem(emailValue, JSON.stringify(dadosUsuario));
    sessionStorage.setItem('usuarioLogado', dadosUsuario.username);
    setUsuarioLogado(dadosUsuario.username);
    return { sucesso: true, mensagem: 'Cadastro realizado com sucesso!' };
  }

  // Faz login validando a senha contra o que está salvo no localStorage
  function login(email, senha) {
    const emailValue = email.trim().toLowerCase();
    const usuarioExistenteRaw = localStorage.getItem(emailValue);
    if (!usuarioExistenteRaw) {
      return { sucesso: false, mensagem: 'Erro inesperado: Usuário não encontrado.' };
    }

    const dadosUsuario = JSON.parse(usuarioExistenteRaw);
    if (senha === dadosUsuario.senha) {
      sessionStorage.setItem('usuarioLogado', dadosUsuario.username);
      setUsuarioLogado(dadosUsuario.username);
      return { sucesso: true, mensagem: 'Acesso autorizado! Entrando...' };
    }
    return { sucesso: false, mensagem: 'Senha incorreta! Tente novamente.' };
  }

  function logout() {
    sessionStorage.removeItem('usuarioLogado');
    setUsuarioLogado(null);
  }

  return { usuarioLogado, verificarEmail, cadastrar, login, logout };
}
