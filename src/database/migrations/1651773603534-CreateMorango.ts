import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMorango1651773603534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "morango",
                columns: [
                    {
                        name: "perfil_id",
                        type: "uuid"
                    },
                    {
                        name: "ppc_disciplina_versao_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_perfil",
                        columnNames: ["perfil_id"],
                        referencedTableName: "perfilEgresso",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_ppc_disciplina_versao",
                        columnNames: ["ppc_disciplina_versao_id"],
                        referencedTableName: "ppcDisciplinaVersao",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("morango");
    }

}