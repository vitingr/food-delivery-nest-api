import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'
import { urlencoded, json, Request } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors<Request>());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(3001);
}
bootstrap();
