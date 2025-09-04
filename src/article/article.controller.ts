import { Controller, Post } from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  constructor() {}

  @Post()
  async createArticle() {
    return { message: 'article created' };
  }
}
