import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerVolunteeringService } from './volunteer_volunteering.service';

describe('VolunteerVolunteeringService', () => {
  let service: VolunteerVolunteeringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VolunteerVolunteeringService],
    }).compile();

    service = module.get<VolunteerVolunteeringService>(VolunteerVolunteeringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
