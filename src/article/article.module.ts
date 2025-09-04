import { ArticleController } from '@/src/article/article.controller';
import { ArticleService } from '@/src/article/article.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [],
})
export class ArticleModule {
  constructor() {}
}
