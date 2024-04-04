import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { Organization } from './entities/organization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [TypeOrmModule.forFeature([Organization]), UsersModule],
  controllers: [OrganizationController],
  providers: [OrganizationService],
  exports: [TypeOrmModule, OrganizationService]
})
export class OrganizationModule {}
