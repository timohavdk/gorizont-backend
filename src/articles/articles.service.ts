import { Injectable } from '@nestjs/common';
import { ArticleInterface } from './interfaces/article.interface';
import { CreateArticleInterface } from './interfaces/create-article.interface';
import { MutationResultArticleInterface } from './interfaces/mutation-result-article.interface';
import { v4 as uuidv4 } from 'uuid';

/** Сервис статей */
@Injectable()
export class ArticlesService {
  private articles: ArticleInterface[] = [
    {
      id: 'f34a9d55-14db-49af-b797-7a1dd136622c',
      title: '1',
      text: '1',
    },
  ];

  /**
   * Создать
   *
   * @param article Создаваемая статья
   */
  create(article: CreateArticleInterface): MutationResultArticleInterface {
    const newArticle: ArticleInterface = Object.assign(
      { id: uuidv4() },
      article,
    );

    this.articles.push(newArticle);

    return {
      id: newArticle.id,
      result: true,
    };
  }

  /** Получить все */
  getAll(): ArticleInterface[] {
    return this.articles;
  }

  /**
   * Получить одну
   *
   * @param id Id статьи
   */
  getOne(id: string): ArticleInterface | null {
    const article = this.articles.find((article) => article.id === id);

    return article ? article : null;
  }

  /**
   * Обновить
   *
   * @param article Обновляемая статья
   */
  update(article: ArticleInterface): MutationResultArticleInterface {
    const articleIndex = this.articles.findIndex(
      (currArticle) => currArticle.id === article.id,
    );

    if (-1 === articleIndex) {
      return {
        id: article.id,
        result: false,
      };
    }

    this.articles.splice(articleIndex, 1, article);

    return {
      id: article.id,
      result: true,
    };
  }

  /**
   * Удалить
   *
   * @param id Id удаляемой статьи
   */
  delete(id: string): MutationResultArticleInterface {
    const articleIndex = this.articles.findIndex(
      (article) => article.id === id,
    );

    if (-1 === articleIndex) {
      return {
        id: id,
        result: false,
      };
    }

    this.articles.splice(articleIndex, 1);

    return {
      id: id,
      result: true,
    };
  }
}
