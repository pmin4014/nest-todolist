import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { AuthCredentialsDto } from "./auth-credential.dto";
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UserRepository extends Repository<User>{
    constructor(private dataSource: DataSource) {

        //데이터베이스 작업을 하기위해 추가
        super(User, dataSource.createEntityManager());
        }

        async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
            const { username, password } = authCredentialsDto;
            
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = this.create({ username, password: hashedPassword });


            try {
                await this.save(user);
            } catch (error) {
                if(error.code === '23505'){
                    throw new ConflictException(' Existing username ');
                }else{
                    throw new InternalServerErrorException();
                }
                
            }
        }

}