
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() createVendorDto: CreateVendorDto) {
    return this.vendorsService.create(req.user.userId, createVendorDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.vendorsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorsService.update(id, updateVendorDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorsService.remove(id);
  }
}
