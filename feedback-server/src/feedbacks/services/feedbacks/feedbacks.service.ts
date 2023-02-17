import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from '../../dto/feedbacks.dto';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
  ) {}

  createFeedback(createFeedbackDto: CreateFeedbackDto) {
    const newFeedback = this.feedbackRepository.create(createFeedbackDto);
    return this.feedbackRepository.save(newFeedback);
  }

  getFeedbacks() {
    return this.feedbackRepository.find();
  }
}
