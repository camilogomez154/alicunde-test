import { AuthorEntity } from '../../../../domain';

export type GetAllAuthorsCommand = Omit<
  Partial<AuthorEntity>,
  'createdAt' | 'updatedAt'
>;
