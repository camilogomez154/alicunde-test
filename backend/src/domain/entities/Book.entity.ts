import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { AuthorEntity } from './Author.entity';
import { BaseEntity } from '../core/Base';

@Entity('Book')
export class BookEntity extends BaseEntity {
  @Column()
  readonly title!: string;

  @Column()
  readonly chapters!: number;

  @Column()
  readonly pages!: number;

  @ManyToMany(() => AuthorEntity, (author) => author.books, {
    cascade: true,
    eager: true,
    lazy: true,
  })
  @JoinTable()
  readonly authors: AuthorEntity[];
}
