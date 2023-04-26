import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { AuthorEntity } from '../../../domain';
import {
  CreateNewAuthorValidator,
  CreateNewAuthorHandler,
  GetAllAuthorsHandler,
  AuthorRepositoryImpl,
} from '../../../application';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  providers: [
    AuthorRepositoryImpl,
    CreateNewAuthorValidator,
    CreateNewAuthorHandler,
    GetAllAuthorsHandler,
    AuthorService,
  ],
  controllers: [AuthorController],
})
export class AuthorModule {}
