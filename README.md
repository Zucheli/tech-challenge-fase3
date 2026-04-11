# Tech Challenge – Fase 3
**Pós-graduação FIAP – Full Stack Development**

Projeto desenvolvido por **Mateus Zucheli** como entrega da **Fase 3** do Tech Challenge da FIAP, com foco em **React, Vite, TypeScript, consumo de API REST, autenticação JWT e controle de acesso por perfil de usuário**.

---

## Descrição do Projeto

Frontend da aplicação de gerenciamento de postagens educacionais, consumindo a API desenvolvida na Fase 2. A aplicação possui comportamentos distintos conforme o perfil do usuário autenticado.

### Role: ALUNO
- Visualiza a lista de posts e o detalhe de cada post
- Filtra posts por texto, disciplina e tipo
- Filtra posts que curtiu ou que favoritou
- Dá like e favorita posts (toggle — clica de novo para desfazer)
- Vê o estado visual do botão de like (azul) e favorito (dourado) quando já interagiu
- Não vê a contagem numérica de likes e favoritos
- Comenta em posts
- Exclui os próprios comentários

### Role: PROFESSOR
- Realiza login e acessa a área administrativa
- Visualiza a lista de posts e o detalhe de cada post
- Filtra posts por texto, disciplina e tipo
- Vê a contagem numérica de likes e favoritos de cada post
- Não pode dar like nem favoritar
- Cria, edita e exclui posts
- Comenta em posts
- Exclui qualquer comentário
- Realiza logout

---

## Tecnologias Utilizadas

- React 19
- Vite
- TypeScript
- React Router DOM v7
- Axios
- Styled Components
- LocalStorage para persistência de token JWT, role e userId

---

## Estrutura do Projeto

```
tech-challenge-fase3/
│
├── src/
│   ├── api/
│   │   ├── api.ts          # Instância do Axios com interceptor de token
│   │   └── posts.ts        # Tipos e funções de posts, comentários, like e favorito
│   ├── components/
│   │   ├── Header/         # Header com navegação e logout
│   │   └── PostCard/       # Card de post com like/favorito por role
│   ├── pages/
│   │   ├── Home/           # Listagem com filtros e toggles de curtidos/favoritos
│   │   ├── PostDetails/    # Detalhe do post com like/favorito por role e comentários
│   │   ├── Login/          # Autenticação e extração do userId do JWT
│   │   ├── Admin/          # Gerenciamento de posts (somente PROFESSOR)
│   │   ├── CreatePost/     # Criação de post (somente PROFESSOR)
│   │   ├── EditPost/       # Edição de post (somente PROFESSOR)
│   │   ├── Users/          # Listagem de usuários (somente PROFESSOR)
│   │   ├── CreateUser/     # Criação de usuário (somente PROFESSOR)
│   │   └── EditUser/       # Edição de usuário (somente PROFESSOR)
│   ├── routes/
│   │   ├── AppRoutes.tsx   # Definição de rotas públicas e protegidas
│   │   └── PrivateRoute.tsx
│   ├── styles/
│   │   └── GlobalStyles.ts
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

---

## Navegação da Aplicação

**Rotas Públicas**
- `/` → redireciona para `/login`
- `/login` → tela de login
- `/posts` → listagem de posts
- `/posts/:id` → detalhe do post

**Rotas Protegidas** (exigem token JWT)
- `/admin` → gerenciamento de posts (link "Posts" no header)
- `/create` → criar post
- `/edit/:id` → editar post
- `/users` → listagem de usuários
- `/users/create` → criar usuário
- `/users/edit/:id` → editar usuário

O acesso às rotas protegidas é controlado por `PrivateRoute`, que valida a presença do token JWT no localStorage.

---

## 🔐 Autenticação

- O login é realizado via API da Fase 2
- Ao autenticar com sucesso:
  + o token JWT é salvo no `localStorage`
  + o usuário é redirecionado para `/admin`
- O logout remove o token e redireciona para `/login`

```
Credenciais de teste
username: mateus
password: 1234
```

---

## 🔗 Integração com a API (Fase 2)

A aplicação consome os seguintes endpoints:

| Método | Endpoint | Descrição | Acesso |
|--------|-----------|-----------|--------|
| **GET** | `/posts/public` | Lista posts públicos (alunos) | Livre |
| **GET** | `/posts/all` | Lista todos os posts (professores) | Token |
| **GET** | `/posts/:id` | Lê um post específico | Token |
| **GET** | `/posts/search?query=termo` | Busca posts por palavra-chave | Token |
| **POST** | `/posts` | Cria um novo post | Token |
| **PUT** | `/posts/:id` | Atualiza uma postagem | Token |
| **DELETE** | `/posts/:id` | Exclui uma postagem | Token |
| **GET** | `/health` | Verifica o status da API | Livre |

---

## 🔗 Integração com o Backend (Fase 2)

Este projeto representa **exclusivamente o frontend da aplicação**, desenvolvido na **Fase 3** do Tech Challenge.

O backend utilizado (API REST com Node.js, Prisma, Docker e PostgreSQL) foi desenvolvido na **Fase 2** e está disponível em um **repositório separado**.

📦 Repositório do Backend (Fase 2):  
👉 https://github.com/Zucheli/tech-challenge-fase2

O frontend consome a API exposta pelo backend, que deve estar rodando localmente para que todas as funcionalidades estejam disponíveis.

---

## ⚙️ Como Rodar o Projeto Localmente (Fase 3)
### 1️⃣ Clone o repositório
```bash
git clone https://github.com/Zucheli/tech-challenge-fase3.git
cd tech-challenge-fase3
```

### 2️⃣ Instale as dependências
```bash
npm install
```

### 3️⃣ Inicie o frontend
```bash
npm run dev
```

### 4️⃣ Acesse no navegador
```bash
http://localhost:5173
```

---

## 🧪 Comportamentos Validados

- ✔ Listagem de posts públicos
- ✔ Acesso ao detalhe do post
- ✔ Login com JWT
- ✔ Proteção de rotas administrativas
- ✔ CRUD completo de posts
- ✔ Logout funcional
- ✔ Navegação condicional (Header)

---

## 🔗 Rodando Backend + Frontend (Projeto Completo)

O projeto é composto por **dois repositórios independentes**:

- **Fase 2:** Backend (API REST)
- **Fase 3:** Frontend (React)

### 1️⃣ Suba o backend (Fase 2)
```bash
git clone https://github.com/Zucheli/tech-challenge-fase2.git
cd tech-challenge-fase2
docker-compose up -d
npx prisma migrate dev
npm run dev
```

📍 API disponível em:
```bash
http://localhost:3000
```

### 2️⃣ Suba o frontend (Fase 3)
```bash
git clone https://github.com/Zucheli/tech-challenge-fase3.git
cd tech-challenge-fase3
npm install
npm run dev
```

📍 Frontend disponível em:
```bash
http://localhost:5173
```

---

### ✅ Resultado Final

- Backend e Frontend integrados
- Autenticação funcionando
- Navegação validada
- Requisitos do Tech Challenge atendidos

---

## 🧑‍💻 Autor

**👋 Mateus Zucheli**  
🎓 Pós-graduação em Full Stack Development - FIAP  