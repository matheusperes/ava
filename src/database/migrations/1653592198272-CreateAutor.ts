import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAutor1653592198272 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "autores",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "first_name",
                        type: "varchar"
                    },
                    {
                        name: "middle_name",
                        type: "varchar"
                    },
                    {
                        name: "last_name",
                        type: "varchar"
                    },
                    {
                        name: "quote",
                        type: "varchar"
                    },
                    {
                        name: "nationality",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("autores");
    }

}
