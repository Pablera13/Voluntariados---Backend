import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const MyValidationPipe = new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  })
  app.useGlobalPipes(MyValidationPipe);

  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
  });

  // const PORT = process.env.PORT || 3000; 
  await app.listen(443);
}
bootstrap();
