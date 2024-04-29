import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/')
  getAllBoard(){
    return this.boardService.getAllBoard();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number){
    return this.boardService.getBoardById(id);
  }

  @Post()
  createBoard(){
    return this.boardService.createBoard();
  }

  @Patch('/:id')
  updateBoard(@Param('id') id: number){
    return this.boardService.updateBoard(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: number){
    return this.boardService.deleteBoard(id);
  }

}
