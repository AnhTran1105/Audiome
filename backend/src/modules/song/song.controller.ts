import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SongService } from './song.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Song } from './entities/song.entity';
import { CloudinaryService } from '../../common/services/cloudinary.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongController {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly songService: SongService,
  ) {}

  @Get()
  findAll(): Promise<Song[]> {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Song> {
    return this.songService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.songService.remove(id);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('song', {
      storage: this.cloudinaryService.uploadFile().storage,
    }),
  )
  async uploadSong(
    @UploadedFile() file: Express.Multer.File,
    @Body() createSongDto: CreateSongDto,
  ) {
    const songUrl = file.path;

    const song = await this.songService.create({
      ...createSongDto,
      url: songUrl,
      thumbnail: createSongDto.thumbnail,
    });

    return song;
  }
}
