import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private nestConfigService: NestConfigService) {}

  get databaseHost(): string {
    return this.nestConfigService.get<string>('DATABASE_HOST', 'auth-postgres-srv');
  }

  get databasePort(): number {
    return this.nestConfigService.get<number>('DATABASE_PORT', 5432);
  }

  get databaseUsername(): string {
    return this.nestConfigService.get<string>('DATABASE_USERNAME', 'postgres');
  }

  get databasePassword(): string {
    return this.nestConfigService.get<string>('DATABASE_PASSWORD', 'password');
  }

  get databaseName(): string {
    return this.nestConfigService.get<string>('DATABASE_NAME', 'auth');
  }
}