import { Test, TestingModule } from '@nestjs/testing';
import { EventVolunteerController } from './event_volunteer.controller';
import { EventVolunteerService } from './event_volunteer.service';

describe('EventVolunteerController', () => {
  let controller: EventVolunteerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventVolunteerController],
      providers: [EventVolunteerService],
    }).compile();

    controller = module.get<EventVolunteerController>(EventVolunteerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
