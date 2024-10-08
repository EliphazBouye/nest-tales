# NestTales

NestJS Prisma Blog API made with ❤️  
A Blog API made with Nestjs and Prisma with PostgreSql as database.

## 🔭 Requirement
For this project you need :
* `node` >= 20
* `docker` & `docker compose`

## 🛠️ Installation :
For install the project, clone the repository and install dependancies:

```bash
# Clone the repository
$ git clone https://github.com/eliphazb/nestjs-prisma-blog-api

# Go into the direcotry
$ cd nestjs-prisma-blog-api/

# Install dependancies
$ npm install
```

Run docker compose to have postgresql available for our dev environement:
```bash
$ docker compose up -d
```

Prisma & Run Migration:

```bash
# Get prisma
$ npx prisma

# Run migrations
$ npx prisma migrate dev
```

Run the dev server:
```bash
$ npm run start:dev
```

The server is listen on `http://localhost:3000`
![Swagger UI listen server image](./docs/images/_swaggerui.png)
