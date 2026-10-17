# 🚀 Node.js & Prisma Backend API

Uma API Backend RESTful robusta desenvolvida com Node.js, TypeScript, Prisma ORM e PostgreSQL (via Docker), contendo gerenciamento de Usuários e Questões.

## 🛠️ Tecnologias Utilizadas

- **Node.js** & **TypeScript**
- **Prisma ORM** (Gerenciamento de banco de dados e migrações)
- **PostgreSQL** (Banco de dados relacional rodando em Docker)
- **Docker & Docker Compose** (Isolamento de ambiente)
- **Insomnia** (Testes de rotas HTTP)

---

## 📌 Funcionalidades da API

- **Usuários (`/users`)**: Cadastro e listagem de usuários.
- **Questões (`/questions`)**: Criação, listagem, atualização e exclusão de perguntas vinculadas aos usuários.
- **Seed Automatizado**: Script idempotente para popular o banco rapidamente.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Docker Desktop](https://www.docker.com/) rodando

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
   cd NOME_DO_REPOSITORIO