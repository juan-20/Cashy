import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createinfos1602600779623 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'infos',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'nome',
                    type: 'text',
                },
                {
                    name: 'cep',
                    type: 'number',
                },
                {
                    name: 'renda',
                    type: 'decimal',
                },
                {
                    name: 'dependentes',
                    type: 'number',
                },
                {
                    name: 'endereco',
                    type: 'text',
                },
                {
                    name: 'renda_per_capita',
                    type: 'decimal',
                },
            ],
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('infos');

    }

}
