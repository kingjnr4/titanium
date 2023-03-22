import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { config } from 'configs';
import { AdminService } from 'src/modules/admin/services/admin.service';
import { PasswordHashService } from 'src/modules/helpers/services/password.hash.service';
import { AdminLoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
    private readonly passwordHashService: PasswordHashService,
  ){}
  async loginAdmin(dto:AdminLoginDto) {
    const admin = await this.adminService.findByName(dto.username);
    if (!admin) {
      throw new BadRequestException('Invalid Creds');
    }

    if (!this.passwordHashService.compare(dto.password, admin.password)) {
      throw new BadRequestException('Invalid Creds');
    }
    const access = this.jwtService.sign({
      id: admin.id,
    },{
      secret:config().jwt.access.secret,
      expiresIn:config().jwt.access.expiresIn
    });
    return {
      success: true,
      token: {
        access,
      },
    };
  }
}
