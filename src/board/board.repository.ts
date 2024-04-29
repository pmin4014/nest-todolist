import { Injectable } from "@nestjs/common";
import { Board } from "./entities/board.entity";
import { Repository } from "typeorm";

@Injectable()
export class BoardRepository extends Repository<Board>{
    
}