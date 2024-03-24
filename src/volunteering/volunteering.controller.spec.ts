/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { VolunteeringController } from './volunteering.controller';
import { VolunteeringService } from './volunteering.service';

describe('VolunteeringController', () => {
  let controller: VolunteeringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteeringController],
      providers: [VolunteeringService],
    }).compile();

    controller = module.get<VolunteeringController>(VolunteeringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
