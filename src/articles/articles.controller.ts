import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { MutationResultArticleDto } from './dto/mutation-result-article.dto';
import { ArticleDto } from './dto/article.dto';

/** Контроллер "Статьи" */
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  /** Получить все */
  @Get()
  getAll(): ArticleDto[] {
    return this.articleService.getAll();
  }

  /**
   * Получить одну
   *
   * @param params Параметры запроса
   */
  @Get(':id')
  getOne(@Param() params: any): ArticleDto | null {
    return this.articleService.getOne(params.id);
  }

  /**
   * Обновить
   *
   * @param articleDto DTO статьи
   */
  @Put()
  update(@Body() articleDto: ArticleDto): MutationResultArticleDto {
    return this.articleService.update(articleDto);
  }

  /**
   * Получить одну
   *
   * @param params Параметры запроса
   */
  @Delete(':id')
  delete(@Param() params: any): MutationResultArticleDto {
    return this.articleService.delete(params.id);
  }

  /**
   * Обновить
   *
   * @param createArticleDto DTO создаваемой статьи
   */
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  create(@Body() createArticleDto: CreateArticleDto): MutationResultArticleDto {
    return this.articleService.create(createArticleDto);
  }
}
