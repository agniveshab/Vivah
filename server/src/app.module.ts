import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { PrismaModule } from './prisma/prisma.module';

import { ConfigModule } from '@nestjs/config';
import { WeddingsModule } from './weddings/weddings.module';
import { VendorsModule } from './vendors/vendors.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    WeddingsModule,
    VendorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
