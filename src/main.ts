import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MembersModule } from './members/members.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('VRAS API Docs')
  .setDescription('The VRAS API Description')
  .setVersion('1.0')
  .addTag('members')
  .build();

  const document = SwaggerModule.createDocument(app, options, {include: [AppModule, MembersModule]});

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(1337);
}
bootstrap();
