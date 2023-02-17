import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFeedbackDto } from '../../dto/feedbacks.dto';
import { FeedbacksService } from '../../services/feedbacks/feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbackService: FeedbacksService) {}

  @Get()
  getFeedbacks() {
    return this.feedbackService.getFeedbacks();
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateFeedbackDto) {
    return this.feedbackService.createFeedback(createUserDto);
  }
}
