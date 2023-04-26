import { IRepository } from '../core/Repository';
import { BaseEntity } from '../core/Base';

export interface IBookRepository<T extends BaseEntity> extends IRepository<T> {
    createNewBook(book: T): Promise<void>;
    getAllBooks(): Promise<T[]>;
}