import { Repository } from 'typeorm';
import { BaseEntity } from './Base';

export interface IRepository<T extends BaseEntity> {
    readonly repository: Repository<T>;
}