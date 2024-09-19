import { Module } from '@nestjs/common';
import * as process from 'node:process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './articles/article.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      quoteIdentifiers: false,
      username: 'postgres',
      password: 'AfVMk0513',
      database: 'gorizont',
      models: [Article]
    }),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
