import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  createNewAuthor(@Body('name') name: string) {
    return this.authorService.createNewAuthor({ name });
  }

  @Get()
  getAllAuthors() {
    return this.authorService.getAllAuthors({});
  }
}
