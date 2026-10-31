# JOVI Câmera — Challenge FIAP x JOVI (Sprint 4 — Web Development)

Aplicação React da equipe **CloudCore** para os smartphones JOVI: uma landing page responsiva 
(A Solução, Público-Alvo, Galeria, Nossa Equipe e Contato) e um **Simulador do módulo automático**
da câmera, protegido por login. O histórico dos cálculos do simulador é salvo em uma API.

- **Deploy (Vercel):** https://sprint-4-webdev.vercel.app/
- **Repositório:** https://github.com/Fael064/SPRINT-4-WEBDEV

## Tecnologias utilizadas

- React 19 (componentes, props, hooks)
- Vite 8 (bundler e servidor de desenvolvimento)
- Tailwind CSS 4 (plugin `@tailwindcss/vite`)
- React Router DOM 7 (rotas públicas e privadas)
- MockAPI.io (API mockada para o histórico do simulador)
- oxlint (linter) e Vercel (deploy)

## Como instalar as dependências

Pré-requisito: Node.js instalado (versão 18 ou superior).

```bash
npm install
```

## Como executar o projeto

Ambiente de desenvolvimento (com hot reload):

```bash
npm run dev # desenvolvimento (http://localhost:5173 ou a porta mostrada no terminal )
npm run build # build de produção
npm run preview #pré-visualização do build
npm run lint #verificação com oxlint
```

**Servidores/back-end:** o projeto não tem back-end próprio. O consumo de API usa o serviço
mockado MockAPI.io (recurso `historico`), acessado direto pelo navegador; não é necessário
subir nenhum servidor além do `npm run dev`.

## Usuários e senhas para teste

Não existe usuário pré-cadastrado. O cadastro é feito pelo próprio modal de "Login / Cadastro":

1. Clique em **Login / Cadastro** no menu.
2. Informe um e-mail qualquer e continue.
3. Crie uma senha com pelo menos 4 caracteres e informe um nome de usuário.
4. Depois de logado, clique em **Simulador** no menu. 

Observações: os cadastros ficam no `localStorage` do navegador (não há back-end de usuários), e a
sessão vale por aba do navegador (`sessionStorage`). Ao abrir uma aba nova, é preciso entrar de novo.
O histórico do simulador é compartilhado entre todos os usuários, pois a API mockada não filtra por usuário.

## Rotas

| Rota | Acesso | Conteúdo |
|---|---|---|
| `/` | Pública | Landing page (menu com âncoras para cada seção) |
| `/simulador` | **Privada** (exige login) | Simulador do módulo automático + histórico via API |

Sem login, `/simulador` redireciona para `/`.

## Hooks customizados

- `useAuth`: cadastro, login, logout e estado do usuário logado (separa a lógica de autenticação da interface).
- `useHistorico`: consome a API (GET, POST e DELETE) e expõe `historico`, `carregando`, `erro`, `adicionar` e `limpar`.
- Hooks nativos usados: `useState`, `useEffect`, `useLocation`.

## Estrutura do projeto

```
src/
├── components/     
│   ├── landing/ # Menu, Hero, Solucao, PublicoAlvo, Galeria, Equipe, Contato, Rodape
│   ├── CalculadoraModuloAutomatico.jsx
│   ├── LoginModal.jsx
│   ├── RotaPrivada.jsx
├── data/integrantes.js  # dados da equipe usados por Equipe, Contato e Rodape
├── hooks/ # useAuth.js, useHistorico.js
├── pages/ # Home.jsx, Simulador.jsx
├── assets/images/ # imagens otimizadas (webp)
├── App.jsx # rotas e layout
└── index.css # Tailwind, tema (cores/fontes) e estilos do modal de login
```
## Mudanças em relação à Sprint 3

- **Adicionado:** landing page em componentes com Tailwind, menu responsivo (hambúrguer no celular),
  rotas com React Router, rota privada `/simulador`, hook `useHistorico` com API, deploy no Vercel.
- **Modificado:** simulador reestilizado em Tailwind; histórico de cálculos passou do `localStorage` para a API.
- **Removido:** as páginas "Projeto" e "Sobre" da Sprint 3 (o conteúdo foi absorvido pela landing),
  além dos componentes `Header`, `Nav` e `Footer`, substituídos por `Menu` e `Rodape`.

## Responsividade

Testada em Desktop (1280 px), Tablet (768 px) e Mobile (375 px), com abordagem mobile-first do Tailwind.

## Onde e como foi utilizada a IA no projeto

O Claude (Anthropic) foi usado por Rafael Falchi como apoio na parte de Web da Sprint 4, em modo de
orientação passo a passo. A IA sugeriu a estrutura do projeto (rotas, rota privada, hooks e componentes
da landing), indicou o mapeamento do CSS do protótipo para classes Tailwind, ajudou a planejar o consumo
da API (MockAPI) e revisou o repositório, apontando erros de build e de execução (importações com
caminho ou extensão errados, variáveis não definidas e CSS inválido). Parte do código dos componentes da
landing (Menu, Hero, Solução, Público-Alvo, Galeria, Equipe, Contato e Rodapé) e o `vercel.json`
partiram de trechos sugeridos pela IA, que Rafael colou, adaptou e testou.

Foram feitos por Rafael, com orientação da IA: a criação do recurso na MockAPI, o hook `useHistorico`
e a integração com a API, a rota privada, o menu hambúrguer, a conversão do simulador para Tailwind, a
compressão das imagens, o versionamento (branches, pull requests e merges), o deploy no Vercel e os testes
do site publicado. O layout e a identidade visual da landing vêm do protótipo HTML/CSS feito por Vitor
(Front-End Design), reescrito em Tailwind. O código do React foi testado e revisado por Rafael antes da
entrega.
