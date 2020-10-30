import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity('infos')
export default class Info{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    cep: number;

    @Column()
    renda: number;

    @Column()
    dependentes: number;

    @Column()
    endereco: string;

    @Column()
    renda_per_capita: number;

    
}