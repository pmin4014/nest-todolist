import { BaseEntity, Column, PrimaryColumn } from "typeorm";

export class Board extends BaseEntity{
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;
    @Column()
    description: string;
}
