import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardService {
  constructor(){}
  getAllBoard(){
    return
  }
  getBoardById(id: number){
    return
  }
  createBoard(){
    return
  }
  updateBoard(id: number){
    return
  }
  deleteBoard(id: number){
    return
  }
}
