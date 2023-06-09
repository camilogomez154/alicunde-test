import { IRepository } from '../core/Repository';
import { AuthorEntity } from '../entities';

export interface IAuthorRepository extends IRepository<AuthorEntity> {
  getByIds(ids: string[]): Promise<AuthorEntity[]>;
  createNewAuthor(author: AuthorEntity): Promise<void>;
  getAllAuthors(): Promise<AuthorEntity[]>;
}
