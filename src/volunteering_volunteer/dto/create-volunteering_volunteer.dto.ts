import { IsInt, IsNotEmpty } from "class-validator";

export class CreateVolunteeringVolunteerDto {
    @IsInt()
    userId: number;
    
    @IsNotEmpty()
    @IsInt()
    volunteeringId: number;

    
}
