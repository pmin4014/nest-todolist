import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './typeORM.config';

@Module({
  imports: [
    BoardModule,
    TypeOrmModule.forRoot(typeORMConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
