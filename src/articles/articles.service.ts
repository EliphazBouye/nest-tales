import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateArticleDto from './dto/create-article.dto';
import UpdateArticleDto from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create (createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto })
  }

  update (id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({ where: { id }, data: updateArticleDto })
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } })
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } })
  }
  
  findOne(id: number) {
    return this.prisma.article.findUniqueOrThrow({ where: { id } })
  }
}
