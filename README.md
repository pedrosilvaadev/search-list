# Search List

Aplicacao React com TypeScript que reune 3 mini componentes para estudo de hooks, consumo de API e renderizacao dinamica:

- busca com debounce
- lista de tarefas
- infinite scroll

## Objetivo

Este projeto foi criado para praticar conceitos comuns de front-end moderno em uma interface simples, trocando entre componentes no mesmo layout.

## Funcionalidades

1. Search List
- Campo de busca com debounce (`useDebounce`)
- Consulta de usuarios na API `jsonplaceholder`
- Renderizacao da lista de resultados em tempo real

2. Todo List
- Criacao de tarefas
- Marcacao de tarefa como concluida
- Remocao de tarefa
- Persistencia no `localStorage` ao adicionar/remover/atualizar

3. Infinity Scroll
- Listagem de criptomoedas via API da CoinGecko
- Carregamento paginado
- Scroll infinito com `react-intersection-observer`

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## Estrutura do projeto

```txt
src/
  components/
    infinity-scroll.tsx
    input.tsx
    search-list.tsx
    todo-list.tsx
  hook/
    useDebounce.ts
    useTodoList.ts
  service/
    api.ts
  App.tsx
  main.tsx
  index.css
```

## Como executar localmente

1. Instale as dependencias:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador a URL exibida no terminal (normalmente `http://localhost:5173`).

## Scripts disponiveis

- `npm run dev`: inicia o ambiente de desenvolvimento
- `npm run build`: gera o build de producao
- `npm run preview`: visualiza o build localmente
- `npm run lint`: executa o lint do projeto

## APIs utilizadas

- Usuarios: `https://jsonplaceholder.typicode.com/users`
- Criptomoedas: `https://api.coingecko.com/api/v3/coins/markets`

## Possiveis melhorias

- Carregar tarefas salvas no `localStorage` ao iniciar a aplicacao
- Exibir estados de erro/empty state para as listas
- Adicionar testes de componentes e hooks
- Melhorar responsividade do layout principal
