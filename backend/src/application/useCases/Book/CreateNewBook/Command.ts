import { BookEntity } from '../../../../domain';

export type CreateNewBookCommand = Omit<
  BookEntity,
  'id' | 'createdAt' | 'updatedAt'
> & { authors: string[] };
