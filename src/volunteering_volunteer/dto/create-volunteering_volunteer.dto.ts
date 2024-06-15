import { IsInt, IsNotEmpty } from "class-validator";

export class CreateVolunteeringVolunteerDto {
    @IsInt()
    volunteerId: number;
    
    @IsNotEmpty()
    @IsInt()
    volunteeringId: number;

    
}
