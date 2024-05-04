import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserRepository extends Repository<User>{
    constructor(private dataSource: DataSource) {

        //데이터베이스 작업을 하기위해 추가
        super(User, dataSource.createEntityManager());
        }
        
}