import { Module } from '@nestjs/common';
import { FeedbacksController } from './controllers/feedbacks/feedbacks.controller';
import { FeedbacksService } from './services/feedbacks/feedbacks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from '../typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
})
export class FeedbacksModule {}
