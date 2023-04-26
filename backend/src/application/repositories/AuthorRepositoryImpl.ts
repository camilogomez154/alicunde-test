import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateNewAuthorCommand } from '../useCases/Author/CreateNewAuthor/Command';
import { AuthorEntity, IAuthorRepository } from '../../domain';

@Injectable({ scope: Scope.REQUEST })
export class AuthorRepositoryImpl implements IAuthorRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    readonly repository: Repository<AuthorEntity>,
  ) {}

  adaptCreateNewAuthorCommandToEntity({
    name,
  }: CreateNewAuthorCommand): AuthorEntity {
    return this.repository.create({ name });
  }

  async createNewAuthor(author: AuthorEntity): Promise<void> {
    await this.repository.save(author);
  }

  getAllAuthors(): Promise<AuthorEntity[]> {
    return this.repository.find();
  }
}
