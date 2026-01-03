# 🧠 Tech Challenge – Fase 3
**Pós-graduação FIAP – Full Stack Development**

Projeto desenvolvido por **Mateus Zucheli** como entrega da **Fase 3** do Tech Challenge da FIAP, com foco em **React, Vite, TypeScript, consumo de API REST, autenticação e navegação protegida**.

---

## 🚀 Descrição do Projeto

Este projeto consiste no frontend da aplicação de gerenciamento de postagens, consumindo a API desenvolvida na Fase 2.

A aplicação permite:

- 🎓 **Usuários públicos (alunos):**
  + visualizar a lista de posts
  + acessar o detalhe de cada post

- 👨‍🏫 **Usuários autenticados (professores):**
  + realizar login
  + acessar área administrativa
  + criar, editar e excluir posts
  + realizar logout

O foco desta fase está em componentização, navegação, consumo de API, controle de autenticação e experiência do usuário.

---

## 🧰 Tecnologias Utilizadas

- ⚛️ **React**
- ⚡ **Vite**
- 🟦 **TypeScript**
- 🌐 **React Router DOM**
- 🔗 **Axios**
- 💾 **LocalStorage (JWT)**
- 🎨 **CSS inline / organização por componentes**

---

## 🧩 Estrutura do Projeto
```
tech-challenge-fase3/
│
├── src/
│   ├── api/              # Configuração do Axios e chamadas à API
│   ├── components/       # Componentes reutilizáveis (Header, PostCard)
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home
│   │   ├── PostDetails
│   │   ├── Login
│   │   ├── Admin
│   │   ├── CreatePost
│   │   └── EditPost
│   ├── routes/           # Rotas públicas e privadas
│   ├── styles/           # Estilos globais
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🧭 Navegação da Aplicação
- 🌍 **Rotas Públicas**
  + `/` → Home (lista de posts)
  + `/posts/:id` → Detalhe do post
  + `/login` → Login

- 🔒 **Rotas Protegidas**
  + `/admin` → Área administrativa
  + `/create` → Criar post
  + `/edit/:id` → Editar post

O acesso às rotas protegidas é controlado por um PrivateRoute, que valida a presença do token JWT no localStorage.

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