import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNewBookCommand } from '../../../application';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  createNewAuthor(@Body() book: CreateNewBookCommand) {
    return this.bookService.createNewBook(book);
  }

  @Get()
  getAllAuthors() {
    return this.bookService.getAllBooks({});
  }
}
