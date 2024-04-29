import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/')
  getAllBoard(){
    return this.boardService.getAllBoard();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board>{
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)//dto에 IsNotEmpty 유효성 검사를 사용하기 위해
  createBoard(@Body() createBoardDto: CreateBoardDto):Promise<Board>{
    return this.boardService.createBoard(createBoardDto);
  }

  @Patch('/:id')
  updateBoard(@Param('id') id: number){
    return this.boardService.updateBoard(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void>{
    return this.boardService.deleteBoard(id);
  }

}
