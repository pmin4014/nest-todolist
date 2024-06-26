import { Injectable } from "@nestjs/common";
import { Board } from "./entities/board.entity";
import { DataSource, Repository } from "typeorm";
import { CreateBoardDto } from "./dto/create-board.dto";
import { User } from "src/auth/entities/user.entity";

@Injectable()
export class BoardRepository extends Repository<Board>{
    constructor(private dataSource: DataSource){
        //데이터베이스 작업을 하기위해 추가
        super(Board, dataSource.createEntityManager());
    }
    
    async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>{
        const {title, description} = createBoardDto;

        const board = this.create({
        title,
        description,
        user
    })

    await this.save(board);
    
    return board;//
    }
}