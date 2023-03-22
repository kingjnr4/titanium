import { Controller, Post,Body } from '@nestjs/common';
import { AdminLoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/admin/login')
  loginAdmin(@Body() dto: AdminLoginDto) {
    return this.authService.loginAdmin(dto);
  }
}
