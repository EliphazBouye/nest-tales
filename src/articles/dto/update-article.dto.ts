import { PartialType } from "@nestjs/swagger";
import CreateArticleDto from "./create-article.dto";

export default class UpdateArticleDto extends PartialType(CreateArticleDto){ }
