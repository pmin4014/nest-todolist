import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './entities/board.entity';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ){}

  async getAllBoard(): Promise<Board[]>{
    const query = this.boardRepository.createQueryBuilder('board');

    const boards = await query.getMany();

    return boards;
  }

  async getUserBoard(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');

    query.where('board.userId = :userId', { userId: user.id });

    const boards = await query.getMany();

    return boards;
  }

  async getBoardById(id: number): Promise<Board>{
    const found = await this.boardRepository.findOneBy({id});

    if(!found){
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>{
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  async updateBoard(id: number, updateData: UpdateBoardDto): Promise<Board>{
    const board = await this.getBoardById(id);

    const updatedBoard = await this.boardRepository.save({...board, ...updateData});

    return updatedBoard;

  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if(result.affected === 0){
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
