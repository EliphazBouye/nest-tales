# NestJS Prisma Blog API made with ❤️
A Blog API made with Nestjs and Prisma with PostgreSql as database.

## 🔭 Requirement
For this project you need :
* `node` >= 20
* `docker` & `docker compose`

## 🛠️ Installation :
For install the project, clone the repository and install dependancies:

```cmd
# Clone the repository
$ git clone https://github.com/eliphazb/nestjs-prisma-blog-api

# Go into the direcotry
$ cd nestjs-prisma-blog-api/

# Install dependancies
$ npm install
```

Run docker compose to have postgresql available for our dev environement:
```cmd
$ docker compose up -d
```

Prisma & Run Migration:

```cmd
# Get prisma
$ npx prisma

# Run migrations
$ npx prisma migrate dev
```

Run the dev server:
```cmd
$ npm run start:dev
```

