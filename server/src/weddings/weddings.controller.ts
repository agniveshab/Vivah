
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('weddings')
export class WeddingsController {
  constructor(private readonly weddingsService: WeddingsService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() createWeddingDto: CreateWeddingDto) {
    return this.weddingsService.create(req.user.userId, createWeddingDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('my-wedding')
  findMyWedding(@Request() req) {
    return this.weddingsService.findByUserId(req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weddingsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeddingDto: UpdateWeddingDto) {
    return this.weddingsService.update(id, updateWeddingDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weddingsService.remove(id);
  }
}
