import { DataSource } from 'typeorm';

export default new DataSource({
  migrations: ['./src/infrastructure/migrations/**/*.ts'],
  entities: ['./src/domain/entities/**/*.entity.ts'],
  database: './.datasources/database.sqlite',
  synchronize: true,
  type: 'sqlite',
  logging: true,
});
