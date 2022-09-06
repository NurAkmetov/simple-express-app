import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Agency {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    region!: string;
}