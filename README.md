# 💸 OrnaFinance

OrnaFinance é uma aplicação de **gestão de finanças pessoais** desenvolvida com **Next.js** e **Prisma ORM**, focada em simplicidade e visualização clara das movimentações financeiras.

---

## 🚀 Funcionalidades

- 📌 Cadastro de **ganhos e despesas**  
- 🔎 Filtro por tipo de transação (Entrada / Saída)  
- 💰 Cálculo automático do **saldo atual**  
- 📊 Visualização em **gráficos interativos**  
- 🔐 Autenticação segura para cada usuário  

---

## 🖥️ Demonstração

### Dashboard com Resumo Financeiro
![Dashboard](./public/logos/Screenshot_8.png)

### Listagem de Transações
![Transações](./public/screenshots/transactions.png)

> ⚠️ Substitua os exemplos acima pelas imagens reais do seu projeto.  
> Sugestão: crie uma pasta `public/screenshots/` no projeto para organizar as prints.

---

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) — Framework React  
- [Prisma ORM](https://www.prisma.io/) — ORM para banco de dados  
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática  
- [Tailwind CSS](https://tailwindcss.com/) — Estilização  
- [Recharts](https://recharts.org/) — Gráficos interativos  
- [Auth.js](https://authjs.dev/) — Autenticação  

---

## ⚙️ Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/ornafinance.git

# Acesse a pasta
cd ornafinance

# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/ornafinance"

# Rode as migrations do Prisma
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev
