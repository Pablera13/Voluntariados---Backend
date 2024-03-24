import { Test, TestingModule } from '@nestjs/testing';
import { VolunteeringService } from './volunteering.service';

describe('VolunteeringService', () => {
  let service: VolunteeringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VolunteeringService],
    }).compile();

    service = module.get<VolunteeringService>(VolunteeringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
