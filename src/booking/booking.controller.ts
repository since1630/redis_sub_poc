import { Controller, OnModuleInit, Inject } from '@nestjs/common';
import { Redis } from 'ioredis';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController implements OnModuleInit {
  constructor(
    // redis Provider를 통해 의존성을 주입받는다
    // 이때 Token을 넣어 어디서 주입받는지 확인
    @Inject('REDIS_CLIENT') private readonly redis: Redis,
    private readonly bookingService: BookingService,
  ) {}

  // 호스트 모듈이 초기화되면 호출
  onModuleInit() {
    // Redis sub 채널 등록
    this.redis.subscribe('Ticket');
    // on Method로 event : message가 오는 경우, 실행
    this.redis.on('message', async (channel, message) => {
      // message의 경우 String으로 오기 때문에, parse를 통해 객체화
      const booking = JSON.parse(message);
      const createBooking = await this.bookingService.createBooking(booking);

      if ((createBooking.success = true)) console.log('공연 예매 성공!');
    });
  }
}
