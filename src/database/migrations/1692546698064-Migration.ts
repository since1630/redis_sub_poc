import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1692546698064 implements MigrationInterface {
  name = 'Migration1692546698064';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "booking" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "goodsId" integer NOT NULL, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "goods" ("id" SERIAL NOT NULL, "bookingLimit" integer NOT NULL, "bookingCount" integer NOT NULL, CONSTRAINT "PK_105e56546afe0823fa08df0baf7" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "goods"`);
    await queryRunner.query(`DROP TABLE "booking"`);
  }
}
