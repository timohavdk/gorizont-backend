import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './article.model';

@Module({
    imports: [SequelizeModule.forFeature([Article])],
    controllers: [ArticlesController],
    providers: [ArticlesService],
    exports: [ArticlesService, SequelizeModule],
})
export class ArticlesModule {
    constructor(private articlesService: ArticlesService) { }
}
