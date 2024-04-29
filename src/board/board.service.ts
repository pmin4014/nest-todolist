import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }
  
}
