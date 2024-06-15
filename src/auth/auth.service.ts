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
    
    

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    
    

    
    const payload = { sub: user.id, username: user.mail };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}