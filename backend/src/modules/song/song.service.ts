import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';

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

  create(song: Partial<Song>): Promise<Song> {
    const newSong = this.songRepository.create(song);
    return this.songRepository.save(newSong);
  }

  async remove(id: number): Promise<void> {
    await this.songRepository.delete(id);
  }
}
