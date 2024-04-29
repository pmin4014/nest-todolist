import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ){}
  getAllBoard(){
    return 'getAllBoard'
  }
  getBoardById(id: number){
    return `getBoardById id: ${id}`
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
