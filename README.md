# JOVI Câmera — Challenge FIAP x JOVI (Sprint 3 — Web Development)

Migração do protótipo desenvolvido em HTML/CSS/JS puro (Sprint 2) para React, com estrutura de
componentes (pai → filho), persistência via `localStorage`/`sessionStorage` e um simulador do
módulo automático da câmera que usa operações matemáticas (arredondamento, limites e
randomização).

## Tecnologias utilizadas

- React 19
- Vite 8 (bundler e servidor de desenvolvimento)
- JavaScript (JSX)
- CSS puro (herdado e adaptado do protótipo da Sprint 2)
- `localStorage` e `sessionStorage` para cadastro/login e histórico de cálculos

## Como instalar as dependências

Pré-requisito: Node.js instalado (versão 18 ou superior).

```bash
npm install
```

## Como executar o projeto

Ambiente de desenvolvimento (com hot reload):

```bash
npm run dev
```

O terminal vai mostrar o endereço local (normalmente `http://localhost:5173`).

Para gerar a build de produção e pré-visualizá-la localmente:

```bash
npm run build
npm run preview
```

## Usuários e senhas para teste

Não existe usuário pré-cadastrado. O cadastro é feito pelo próprio modal de "Login / Cadastro":

1. Clique em "Login / Cadastro" no menu.
2. Digite um e-mail qualquer que ainda não tenha sido usado nesse navegador.
3. Digite uma senha com pelo menos 4 caracteres.
4. Informe um nome de usuário quando solicitado.
5. Da próxima vez que testar com o mesmo e-mail, use a mesma senha para logar.

Os dados ficam salvos apenas no `localStorage` do navegador usado (não há backend).

## Onde e como foi utilizada a IA no projeto

O Claude (Anthropic) foi utilizado para gerar a estrutura inicial dos componentes React (Header, Nav, LoginModal, Footer) a partir do protótipo HTML da Sprint 2, incluindo a migração da lógica de login/cadastro para um hook customizado e a criação do módulo de cálculo com Math (ISO/abertura). A partir desse ponto, o grupo foi responsável por configurar o ambiente local, testar a aplicação, diagnosticar e corrigir problemas próprios do processo (como um erro de codificação de nome de arquivo e permissões do PowerShell), versionar o projeto no Git e realizar o deploy na Vercel. Além disso, o grupo também revisou e ajustou parâmetros do módulo de cálculo (limite de ISO e tamanho do histórico salvo) para refletir sensores de câmera mais atuais. 
Posteriormente, o grupo estendeu o módulo de cálculo adicionando um terceiro critério (preferência de saturação de cores) e uma mensagem de estado vazio no histórico, implementando e depurando essas mudanças de forma independente.


## Link do Deploy na Vercel

https://sprint-3-webdev-eight.vercel.app

##Link do repositório Git: https://github.com/Fael064/SPRINT-3-WEBDEV

## Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (filhos)
│   ├── Header.jsx
│   ├── Nav.jsx
│   ├── LoginModal.jsx
│   ├── Footer.jsx
│   └── CalculadoraModuloAutomatico.jsx
├── hooks/
│   └── useAuth.js    # Lógica de login/cadastro com localStorage e sessionStorage
├── pages/            # "Páginas" da aplicação (Home, Projeto, Sobre)
├── assets/imagens/   # Imagens e vídeo herdados do protótipo da Sprint 2
├── App.jsx           # Componente pai que orquestra tudo
└── index.css         # Estilos (base herdada da Sprint 2 + novos componentes)
```
