import { Test, TestingModule } from '@nestjs/testing';
import { EventVolunteerService } from './event_volunteer.service';

describe('EventVolunteerService', () => {
  let service: EventVolunteerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventVolunteerService],
    }).compile();

    service = module.get<EventVolunteerService>(EventVolunteerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
