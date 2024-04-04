import { IsInt, IsNotEmpty } from "class-validator";

export class CreateVolunteeringVolunteerDto {

    @IsNotEmpty()
    @IsInt()
    volunteeringId: number;

    @IsNotEmpty()
    @IsInt()
    volunteerId: number;
}
