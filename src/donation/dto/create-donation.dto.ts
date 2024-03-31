import { IsNumber, IsNotEmpty} from 'class-validator';

export class CreateDonationDto {

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  // sponsorshipId: number;

  // volunteerId: number;

}
