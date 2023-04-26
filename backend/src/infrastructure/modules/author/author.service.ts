import { Injectable } from '@nestjs/common';

import {
  CreateNewAuthorCommand,
  CreateNewAuthorHandler,
  GetAllAuthorsCommand,
  GetAllAuthorsHandler,
} from '../../../application';

@Injectable()
export class AuthorService {
  constructor(
    private readonly createNewBookHandler: CreateNewAuthorHandler,
    private readonly GetAllAuthorsHandler: GetAllAuthorsHandler,
  ) {}

  createNewAuthor(command: CreateNewAuthorCommand) {
    return this.createNewBookHandler.execute(command);
  }

  getAllAuthors(command: GetAllAuthorsCommand) {
    return this.GetAllAuthorsHandler.execute(command);
  }
}
