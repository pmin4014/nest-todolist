import { User } from "src/auth/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    @Column()
    description: string;
    @ManyToOne(type => User, user => user.boards, { eager: false })
    user: User;
}
