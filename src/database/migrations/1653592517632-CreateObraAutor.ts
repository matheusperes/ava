import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateObraAutor1653592517632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "obraAutor",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "obra_id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "autor_id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "funcao",
                        type: "varchar",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_obra",
                        columnNames: ["obra_id"],
                        referencedTableName: "obras",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_autor",
                        columnNames: ["autor_id"],
                        referencedTableName: "autores",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("obraAutor");
    }

}
