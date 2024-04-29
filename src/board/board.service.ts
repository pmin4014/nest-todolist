import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ){}
  getAllBoard(){
    return 'getAllBoard'
  }

  async getBoardById(id: number): Promise<Board>{
    const found = await this.boardRepository.findOneBy({id});

    if(!found){
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board>{
    return this.boardRepository.createBoard(createBoardDto);
  }
  updateBoard(id: number){
    return 'updateBoard'
  }
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if(result.affected === 0){
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
