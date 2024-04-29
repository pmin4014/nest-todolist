import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config'

const dbConfig = config.get('db');
console.log('dbconfig = ', dbConfig);

export const typeORMConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    
    //엔티티를 이용해서 데이터베이스 테이블을 생성한다. 그래서 엔티티 파일이 어디에 있는지 설정해준다.
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    //true값을 주면 애플리케이션을 다시 실행할 때 엔티티 안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 Drop한 후 다시 생성한다.
    synchronize: dbConfig.synchronize,
}