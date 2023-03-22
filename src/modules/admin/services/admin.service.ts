import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OrmService } from 'src/modules/database/services/orm.service';
import { PasswordHashService } from 'src/modules/helpers/services/password.hash.service';
import { CreateAdminDto } from '../dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly ormService: OrmService,
    private readonly passwordHashService: PasswordHashService,
  ) {}

  async find(id: number) {
    const admin = this.ormService.admin.findFirst({
      where: {
        id,
      },
    });
    if (!admin) {
      throw new BadRequestException('Not found');
    }
    return admin;
  }

  async findByNameAndThrow(username: string) {
    const admin = await this.ormService.admin.findFirst({
      where: {
        username,
      },
    });
    if (admin) {
      throw new BadRequestException('Adnin exist found');
    }
  }

  async findByName(username: string) {
    const admin = await this.ormService.admin.findFirst({
      where: {
        username,
      },
    });
    if (!admin) {
      throw new BadRequestException('Invalid Creds');
    }
    return admin
  }

  async create(dto: CreateAdminDto) {
    await this.findByNameAndThrow(dto.username);
    const hashedPass = await this.passwordHashService.hash(dto.password);
    return this.ormService.admin.create({
      data: {
        username: dto.username,
        password: hashedPass,
      },
    });
  }
}
