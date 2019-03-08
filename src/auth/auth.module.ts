import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from '../http.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'bearer' }), UserModule],
  providers: [AuthService, HttpStrategy, UserService],
})
export class AuthModule {}
