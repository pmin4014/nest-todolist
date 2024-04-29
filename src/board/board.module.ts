import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { BoardRepository } from './board.repository';

@Module({
  //typeorm이 사용할 엔티티 클래스 지정
  imports: [TypeOrmModule.forFeature([Board])],
  controllers: [BoardController],
  providers: [
    BoardService,
    BoardRepository
  ],
})
export class BoardModule {}
