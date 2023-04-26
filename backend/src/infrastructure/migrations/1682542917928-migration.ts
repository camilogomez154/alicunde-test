import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1682542917928 implements MigrationInterface {
  name = 'Migration1682542917928';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Author" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "Book" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "title" varchar NOT NULL, "chapters" integer NOT NULL, "pages" integer NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Book"`);
    await queryRunner.query(`DROP TABLE "Author"`);
  }
}
