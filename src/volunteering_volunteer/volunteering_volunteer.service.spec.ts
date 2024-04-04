import { Test, TestingModule } from '@nestjs/testing';
import { VolunteeringVolunteerService } from './volunteering_volunteer.service';

describe('VolunteeringVolunteerService', () => {
  let service: VolunteeringVolunteerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VolunteeringVolunteerService],
    }).compile();

    service = module.get<VolunteeringVolunteerService>(VolunteeringVolunteerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
