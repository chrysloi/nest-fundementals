import { MigrationInterface, QueryRunner } from "typeorm";

export class CoffeeRefactor1681941154846 implements MigrationInterface {
    name = 'CoffeeRefactor1681941154846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flavor" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description1"`);
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description2"`);
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description3"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description3" character varying`);
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description2" character varying`);
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description1" character varying`);
        await queryRunner.query(`ALTER TABLE "flavor" ADD "description" character varying`);
    }

}
