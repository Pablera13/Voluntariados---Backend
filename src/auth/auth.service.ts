import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { VolunteerService } from 'src/volunteer/volunteer.service';
import { OrganizationService } from 'src/organization/organization.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private volunteerService: VolunteerService,
    private organizationService: OrganizationService
  ) {}

  async signIn(
    mail: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByMail(mail);
    const volunteer = await this.volunteerService.findOne(5);
    

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    
    

    if (volunteer) {
      if (!volunteer.itsVerified) {
        throw new HttpException('Su cuenta aun no ha sido verificada!', HttpStatus.METHOD_NOT_ALLOWED);
      }
    } else {
      // Intentar encontrar el usuario como organization
      const organization = await this.organizationService.findOne(user.id);
  
      if (organization) {
        if (!organization.verified) {
          throw new HttpException('La cuenta de la organización aun no ha sido verificada!', HttpStatus.METHOD_NOT_ALLOWED);
        }
      } else {
        // Si el usuario no es ni volunteer ni organization
        throw new UnauthorizedException('Usuario no válido');
      }
    }
    const payload = { sub: user.id, username: user.mail };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}