import { Injectable } from '@nestjs/common';
import { hash, compareSync } from 'bcrypt';

@Injectable()
export class PasswordHashService {
  async hash(text: string): Promise<string> {
    return hash(text, 10);
  }

   compare(text: string, hashed: string): boolean {
    return compareSync(text, hashed);
  }
}
