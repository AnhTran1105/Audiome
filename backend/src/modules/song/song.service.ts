import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  findAll(): Promise<Song[]> {
    return this.songRepository.find();
  }

  findOne(id: number): Promise<Song> {
    return this.songRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.songRepository.delete(id);
  }

  async create(createSongDto: CreateSongDto): Promise<Song> {
    const song = this.songRepository.create(createSongDto);
    return this.songRepository.save(song);
  }
}
