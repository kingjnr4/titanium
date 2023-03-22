import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { AdminModule } from '../admin/admin.module';
import { HelpersModule } from '../helpers/helpers.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[AdminModule,HelpersModule,],
  providers: [AuthService,JwtService],
  controllers: [AuthController]
})
export class AuthModule {}
