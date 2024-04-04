import { Test, TestingModule } from '@nestjs/testing';
import { VolunteeringVolunteerController } from './volunteering_volunteer.controller';
import { VolunteeringVolunteerService } from './volunteering_volunteer.service';

describe('VolunteeringVolunteerController', () => {
  let controller: VolunteeringVolunteerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteeringVolunteerController],
      providers: [VolunteeringVolunteerService],
    }).compile();

    controller = module.get<VolunteeringVolunteerController>(VolunteeringVolunteerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
