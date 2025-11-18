# MarketPlace API 🛍️

API RESTful para um marketplace construída com Node.js, Express, Prisma e PostgreSQL (Supabase).

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Uma conta no [Supabase](https://supabase.com/) (já configurado neste projeto)

## 🚀 Como Rodar o Projeto

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/JGuilherme-aa1603/MarketPlaceAPI.git
cd MarketPlaceAPI
```

### 2️⃣ Instale as Dependências

```bash
npm install
```

Isso instalará todas as dependências necessárias:
- `express` - Framework web
- `prisma` - ORM para banco de dados
- `@prisma/client` - Cliente Prisma
- `dotenv` - Gerenciamento de variáveis de ambiente
- `cors` - Habilitar CORS
- `helmet` - Segurança HTTP

### 3️⃣ Configure as Variáveis de Ambiente

O arquivo `.env` já está configurado com as credenciais do Supabase. Certifique-se de que ele existe na raiz do projeto:

```env
SUPABASE_URL=https://veonmeuipoctaklhzitz.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# Connect to Supabase via connection pooling
DATABASE_URL="postgresql://postgres.veonmeuipoctaklhzitz:password@aws-1-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection to the database. Used for migrations
DIRECT_URL="postgresql://postgres.veonmeuipoctaklhzitz:password@aws-1-sa-east-1.pooler.supabase.com:5432/postgres"

JWT_SECRET="your-jwt-secret"
```

> ⚠️ **Importante**: Nunca compartilhe suas credenciais publicamente!

### 4️⃣ Gere o Cliente Prisma

```bash
npx prisma generate
```

Este comando:
- Lê o schema do Prisma (`prisma/schema.prisma`)
- Gera o cliente Prisma com tipos TypeScript
- Cria os arquivos necessários em `src/generated/prisma/`

### 5️⃣ Execute as Migrações (Opcional)

Se precisar sincronizar o schema com o banco de dados:

```bash
npx prisma migrate deploy
```

Ou para criar uma nova migração:

```bash
npx prisma migrate dev --name nome_da_migracao
```

### 6️⃣ Inicie o Servidor

```bash
npm start
```

O servidor estará rodando em: **http://localhost:3000**

---

## 📚 Endpoints da API

### Produtos

#### Listar todos os produtos
```http
GET /api/products
```

**Query Parameters:**
- `category` (opcional) - Filtrar por nome da categoria
- `page` (opcional) - Número da página (padrão: 1)
- `limit` (opcional) - Itens por página (padrão: 10)
- `initialValue` (opcional) - Preço mínimo
- `finalValue` (opcional) - Preço máximo

**Exemplo:**
```http
GET /api/products?category=jewelery&initialValue=100&finalValue=500&page=1&limit=10
```

#### Buscar produto por ID
```http
GET /api/products/:productId
```

**Exemplo:**
```http
GET /api/products/1
```

#### Buscar avaliações de um produto
```http
GET /api/products/:productId/reviews
```

**Exemplo:**
```http
GET /api/products/1/reviews
```

### Usuários

#### Buscar produtos de um usuário
```http
GET /api/users/:userId/products
```

**Exemplo:**
```http
GET /api/users/1/products
```

---

## 📦 Estrutura do Projeto

```
MarketPlaceAPI/
├── src/
│   ├── controllers/
│   │   ├── productsController.js
│   │   ├── usersController.js
│   │   └── services/
│   │       ├── getAllProductsService.js
│   │       ├── getProductByIdService.js
│   │       ├── getProductsByUserIdService.js
│   │       └── getAllProductReviewsService.js
│   ├── routes/
│   │   ├── productsRoutes.js
│   │   └── usersRoutes.js
│   ├── middlewares/
│   ├── prismaClient.js
│   ├── supabaseConfig.js
│   ├── app.js
│   └── server.js
├── prisma/
│   └── schema.prisma
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Prisma** - ORM (Object-Relational Mapping)
- **PostgreSQL** - Banco de dados (via Supabase)
- **Supabase** - Backend as a Service
- **Helmet** - Segurança HTTP
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Gerenciamento de variáveis de ambiente

---

## 🔧 Scripts Úteis

```bash
# Instalar dependências
npm install

# Gerar cliente Prisma
npx prisma generate

# Visualizar banco de dados no Prisma Studio
npx prisma studio

# Executar migrações
npx prisma migrate deploy

# Criar nova migração
npx prisma migrate dev --name nome_da_migracao

# Iniciar servidor
node ./src/server.js
```

---

## 📝 Funcionalidades

- ✅ Listagem de produtos com paginação
- ✅ Filtro por categoria
- ✅ Filtro por faixa de preço
- ✅ Busca de produto por ID
- ✅ Cálculo automático de média de avaliações
- ✅ Listagem de produtos por vendedor
- ✅ Listagem de avaliações de produtos
- ✅ Relacionamentos entre tabelas (produtos, categorias, usuários, avaliações)

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença ISC.

---

## 👤 Autor

**JGuilherme-aa1603**

- GitHub: [@JGuilherme-aa1603](https://github.com/JGuilherme-aa1603)
- Repositório: [MarketPlaceAPI](https://github.com/JGuilherme-aa1603/MarketPlaceAPI)

---

## 📞 Suporte

Se encontrar algum problema ou tiver dúvidas, abra uma [issue](https://github.com/JGuilherme-aa1603/MarketPlaceAPI/issues) no GitHub.

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!
