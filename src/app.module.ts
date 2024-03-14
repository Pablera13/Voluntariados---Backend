import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { SponsorshipModule } from './sponsorship/sponsorship.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'volunteeringDB',
      entities: ["dist/**/*.entity.js"], //Cambiar
      autoLoadEntities: true,
      synchronize: true, //cuando se vaya a correr el API por primera vez ponerlo en TRUE
    }),
    UsersModule,
    CompanyModule,
    SponsorshipModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}