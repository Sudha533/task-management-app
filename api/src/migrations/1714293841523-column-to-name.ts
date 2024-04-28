import { MigrationInterface, QueryRunner } from "typeorm";

export class ColumnToName1714293841523 implements MigrationInterface {
    name = 'ColumnToName1714293841523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "name" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, CONSTRAINT "PK_86c85ab0235bbe92757ce7a8f57" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "name"`);
    }

}
