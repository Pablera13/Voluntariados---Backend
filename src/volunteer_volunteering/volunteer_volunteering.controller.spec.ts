/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerVolunteeringController } from './volunteer_volunteering.controller';
import { VolunteerVolunteeringService } from './volunteer_volunteering.service';

describe('VolunteerVolunteeringController', () => {
  let controller: VolunteerVolunteeringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteerVolunteeringController],
      providers: [VolunteerVolunteeringService],
    }).compile();

    controller = module.get<VolunteerVolunteeringController>(VolunteerVolunteeringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
