import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersService } from './members/members.service';
import { MembersController } from './members/members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { MembersModule } from './members/members.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { WeaponsService } from './weapons/weapons.service';
import { WeaponsModule } from './weapons/weapons.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'vras.db',
      entities: ['src/**/**.entity{.ts,.js}'],
      synchronize: true,
  }),
    MembersModule,
    UserModule,
    WeaponsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
