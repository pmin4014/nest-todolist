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

  createBoard(createBoardDto: CreateBoardDto){
    const {title, description} = createBoardDto;
    return `title : ${title}, description: ${description}`
  }
  updateBoard(id: number){
    return 'updateBoard'
  }
  deleteBoard(id: number){
    return 'deleteBoard'
  }
}
