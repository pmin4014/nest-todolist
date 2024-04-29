import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity{
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;
    @Column()
    description: string;
}
