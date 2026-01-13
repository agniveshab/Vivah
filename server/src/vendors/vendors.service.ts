
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorsService {
  constructor(private prisma: PrismaService) { }

  create(userId: string, createVendorDto: CreateVendorDto) {
    const { services, ...rest } = createVendorDto;
    return this.prisma.vendorProfile.create({
      data: {
        ...rest,
        userId,
        services: services && Array.isArray(services) ? { create: services } : undefined,
      },
    });
  }

  findAll(query: any) {
    // Basic search implementation
    const where: any = {};
    if (query.city) where.city = { contains: query.city, mode: 'insensitive' };

    return this.prisma.vendorProfile.findMany({
      where,
      include: { services: true },
    });
  }

  findOne(id: string) {
    return this.prisma.vendorProfile.findUnique({
      where: { id },
      include: { services: true },
    });
  }

  update(id: string, updateVendorDto: UpdateVendorDto) {
    const { services, ...rest } = updateVendorDto;
    // Removing services from update logic for now to avoid complexity with nested updates
    return this.prisma.vendorProfile.update({
      where: { id },
      data: rest,
    });
  }

  remove(id: string) {
    return this.prisma.vendorProfile.delete({
      where: { id },
    });
  }
}
