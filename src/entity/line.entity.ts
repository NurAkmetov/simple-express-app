import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Agency} from "./agency.entity";

@Entity()
export class Line {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    agencyId!: string

    @OneToOne(type => Agency) @JoinColumn()
    agency: Agency;
}