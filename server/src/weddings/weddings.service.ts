
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

@Injectable()
export class WeddingsService {
  constructor(private prisma: PrismaService) { }

  create(userId: string, createWeddingDto: CreateWeddingDto) {
    return this.prisma.wedding.create({
      data: {
        ...createWeddingDto,
        userId,
      },
    });
  }

  findByUserId(userId: string) {
    return this.prisma.wedding.findUnique({
      where: { userId },
      include: {
        ceremonies: true,
        guests: true,
        budgetItems: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.wedding.findUnique({
      where: { id },
      include: {
        ceremonies: true,
        guests: true,
        budgetItems: true,
      },
    });
  }

  update(id: string, updateWeddingDto: UpdateWeddingDto) {
    return this.prisma.wedding.update({
      where: { id },
      data: updateWeddingDto,
    });
  }

  remove(id: string) {
    return this.prisma.wedding.delete({
      where: { id },
    });
  }
}
