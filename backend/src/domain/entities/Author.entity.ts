import { Column, Entity, ManyToMany } from 'typeorm';

import { BaseEntity } from '../core/Base';
import { BookEntity } from './Book.entity';

@Entity('Author')
export class AuthorEntity extends BaseEntity {
  @Column()
  readonly name!: string;

  @ManyToMany(() => BookEntity, (book) => book.authors)
  books: BookEntity[];
}
