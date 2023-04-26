import { Injectable } from '@nestjs/common';
import {
  CreateNewBookCommand,
  CreateNewBookHandler,
  GetAllBooksCommand,
  GetAllBooksHandler,
} from '../../../application';

@Injectable()
export class BookService {
  constructor(
    private readonly createNewBookHandler: CreateNewBookHandler,
    private readonly getAllBooksHandler: GetAllBooksHandler,
  ) {}

  createNewBook(command: CreateNewBookCommand) {
    return this.createNewBookHandler.execute(command);
  }

  getAllBooks(command: GetAllBooksCommand) {
    return this.getAllBooksHandler.execute(command);
  }
}
