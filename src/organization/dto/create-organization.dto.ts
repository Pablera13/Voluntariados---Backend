/* eslint-disable prettier/prettier */
import { IsInt, IsString, IsBoolean, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateOrganizationDto {

    @IsNotEmpty()
    @IsInt()
    cedula: number;
  
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsUrl()
    imageUrl: string;
  
    @IsNotEmpty()
    @IsInt()
    bankaccount: number;
  
    @IsNotEmpty()
    @IsBoolean()
    verified: boolean;
  
    @IsNotEmpty()
    @IsInt()
    userId: number;

}
