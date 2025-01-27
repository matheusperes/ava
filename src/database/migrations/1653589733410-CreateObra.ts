import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateObras1653589733410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "obras",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "item_tipo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "obra_nome",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "capitulo_nome",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "serie_nome",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "colecao_nome",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "organizador_editor_nome",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "funcao",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "editora",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "ano",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "mes",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "dia",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "volume",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "edicao",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "resumo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "periodico_nome",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "periodico_abreviacao",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "numero",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "paginas",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "idioma",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "doi",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "isbn",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "issn",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "url",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "acesso_em",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "contido_em",
                        type: "varchar",
                        isNullable: true
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
        await queryRunner.dropTable("obras");
    }

}
