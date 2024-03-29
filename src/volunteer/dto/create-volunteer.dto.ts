/* eslint-disable prettier/prettier */
export class CreateVolunteerDto {
    id: number;
    cedula: number;
    name: string;
    lastName1: string;
    lastName2: string;
    birthday: Date;
    address: string;
    itsVerified: boolean = false;
    // user: number;
    
}
