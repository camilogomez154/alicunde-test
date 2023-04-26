import { AuthorEntity } from '../../../../domain';

export type CreateNewAuthorCommand = Omit<
  AuthorEntity,
  'id' | 'createdAt' | 'updatedAt' | 'books'
>;
