import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@prisma/client'
export default class ArticleEntity implements Article {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;


  @ApiProperty()
  slug: string;

  @ApiProperty({ required: false, nullable: true })
  description: string;

  @ApiProperty()
  body: string;


  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

}
