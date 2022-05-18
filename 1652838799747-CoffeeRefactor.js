const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CoffeeRefactor1652838799747 {

    async up(queryRunner) {
        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`
        )
    }

    async down(queryRunner) {
    }

}
