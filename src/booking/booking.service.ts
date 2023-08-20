import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from 'src/database/entity/booking.entity';
import { Goods } from 'src/database/entity/goods.entity';
import { Repository } from 'typeorm';
import { BookingDto } from './dto/booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Goods) private goodsRepository: Repository<Goods>,
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ) {}

  async createBooking(booking: BookingDto) {
    const bookingData = await this.goodsRepository.findOne({
      where: { id: booking.goodsId },
      select: { bookingLimit: true },
    });

    if ((booking.userId, bookingData.bookingLimit > 0)) {
      await this.bookingRepository.save(booking);
    }
    return { success: true };
  }
}
