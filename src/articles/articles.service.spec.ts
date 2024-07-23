import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('ArticlesService', () => {
  let service: ArticlesService;
  let prisma: PrismaService;

  const articlesArray = [
    { title: "Test Article 1" , slug: "test-article-1", description: "Test description 1" ,body: "Test body 1", published: true },
    { title: "Test Article 2" , slug: "test-article-2", description: "Test description 2" ,body: "Test body 2", published: true },
    { title: "Test Article 3" , slug: "test-article-3", description: "Test description 3" ,body: "Test body 3", published: true },
    { title: "Test Article 4" , slug: "test-article-4", description: "Test description 4" ,body: "Test body 4", published: true },
  ] 

  const oneArticle = articlesArray[0];

  const db = {
    article: {
      findMany: jest.fn().mockResolvedValue(articlesArray),
      findUnique: jest.fn().mockResolvedValue(oneArticle),
      findFirst: jest.fn().mockResolvedValue(oneArticle),
      create: jest.fn().mockResolvedValue(oneArticle),
      update: jest.fn().mockResolvedValue(oneArticle),
      delete: jest.fn().mockResolvedValue(oneArticle),
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
      ArticlesService,
      {
        provide: PrismaService,
        useValue: db,
      }],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
