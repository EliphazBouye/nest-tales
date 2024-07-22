import { PrismaClient } from "@prisma/client";

// Initialize Prisma client
const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'First Article test 1' },
    update: {},
    create: {
      title: 'First Article test 1',
      slug: 'first-article-test-1',
      description: 'A simple first article.',
      body: 'This article is the first of this awesome blog hehe make a big smile.',
    },
  })
  const post2 = await prisma.article.upsert({
    where: { title: 'Second Article test 2' },
    update: {},
    create: {
      title: 'Second Article test 2',
      slug: 'second-article-test-2',
      description: 'A simple second article.',
      body: 'This article is the second haha of this awesome blog hehe make a big smile.',
      published: true,
    },
  })

  console.log({post1, post2})
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => await prisma.$disconnect())
