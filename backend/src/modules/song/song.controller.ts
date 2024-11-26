import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SongService } from './song.service';
import { Song } from './entities/song.entity';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  findAll(): Promise<Song[]> {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Song> {
    return this.songService.findOne(id);
  }

  @Post()
  create(@Body() song: Partial<Song>): Promise<Song> {
    return this.songService.create(song);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.songService.remove(id);
  }
}
