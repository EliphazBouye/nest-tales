import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import ArticleEntity from './entities/article.entity';
import CreateArticleDto from './dto/create-article.dto';
import UpdateArticleDto from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get()
  @ApiOkResponse({ type: ArticleEntity , isArray: true })
  async findAll() {
    try {
      return await this.articleService.findAll()
    } catch (err) {
      throw new HttpException({ status: HttpStatus.FORBIDDEN }, HttpStatus.FORBIDDEN, {
        cause: err })
    }
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity , isArray: true })
  findDrafts() {
    try {
      return this.articleService.findDrafts()
    } catch (err) {
      throw new HttpException({ status: HttpStatus.FORBIDDEN }, HttpStatus.FORBIDDEN, {
        cause: err })
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.articleService.findOne(id)
     } catch (err) {
       if (err.code === "P2025")
         throw new NotFoundException("Not Article Found")
     }
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async update(@Body() updateArticleDto: UpdateArticleDto,@Param('id', ParseIntPipe) id: number) {
      return await this.articleService.update(id, updateArticleDto)
  }

  @Post()
  @ApiOkResponse({ type: ArticleEntity })
  async create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }
}
