/* eslint-disable prettier/prettier */
export class CreateVolunteerDto {
    id: number;
    cedula: number;
    name: string;
    lastName1: string;
    lastName2: string;
    birthday: Date;
    Address: string;
    itsVerified: boolean = false;
    userId: number;
    
}
