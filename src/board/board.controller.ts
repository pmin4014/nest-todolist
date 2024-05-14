import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('board')
//@UseGuards(AuthGuard())
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/')
  getAllBoard(): Promise<Board[]>{
    return this.boardService.getAllBoard();
  }

  @Get('/myboard')
  getUserBoard(@GetUser() user: User): Promise<Board[]>{
    return this.boardService.getUserBoard(user);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board>{
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)//dto에 IsNotEmpty 유효성 검사를 사용하기 위해
  createBoard(@Body() createBoardDto: CreateBoardDto, @GetUser() user: User):Promise<Board>{
    return this.boardService.createBoard(createBoardDto, user);
  }

  @Patch('/:id')
  updateBoard(@Param('id', ParseIntPipe) id, @Body() updateData: UpdateBoardDto): Promise<Board>{
    return this.boardService.updateBoard(id, updateData);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id, @GetUser() user: User): Promise<void>{
    return this.boardService.deleteBoard(id, user);
  }

}
