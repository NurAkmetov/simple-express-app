import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class init1662389068208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "agencies",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    }
                ],
            }),
            true,
        );

        await queryRunner.createTable(
            new Table({
                name: "lines",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "agencyId",
                        type: "int",
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            "lines",
            new TableForeignKey({
                columnNames: ["agencyId"],
                referencedColumnNames: ["id"],
                referencedTableName: "agencies",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("lines");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("regionId") !== -1,
        );
        await queryRunner.dropForeignKey("lines", foreignKey);
        await queryRunner.dropColumn("lines", "agencyId");
        await queryRunner.dropTable("lines");
        await queryRunner.dropTable("agencies");
    }
}
