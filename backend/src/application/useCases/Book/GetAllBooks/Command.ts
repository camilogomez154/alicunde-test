import { BookEntity } from '../../../../domain';

export type GetAllBooksCommand = Omit<
  Partial<BookEntity>,
  'id' | 'createdAt' | 'updatedAt'
>;
