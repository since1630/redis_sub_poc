import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from 'src/database/entity/goods.entity';
import { Booking } from 'src/database/entity/booking.entity';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [TypeOrmModule.forFeature([Goods, Booking]), RedisModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
