import { Injectable } from '@nestjs/common';
import { ArticleInterface } from './interfaces/article.interface';
import { CreateArticleInterface } from './interfaces/create-article.interface';
import { MutationResultArticleInterface } from './interfaces/mutation-result-article.interface';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';

/** Сервис статей */
@Injectable()
export class ArticlesService {
    constructor(
        @InjectModel(Article)
        private articleModel: typeof Article,
    ) { }

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
    async create(article: CreateArticleInterface) {
        const { text, title } = article;

        try {
            const result = await this.articleModel.create({ title, text, id: uuidv4() })

            return {
                id: '1',
                result: true,
            } as MutationResultArticleInterface;
        } catch (err) {
            console.log('Error: ', err);

            return {
                id: null,
                result: false,
            } as MutationResultArticleInterface;
        }
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
