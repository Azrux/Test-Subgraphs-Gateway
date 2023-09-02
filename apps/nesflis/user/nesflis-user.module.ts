import { Module } from '@nestjs/common';
import { UserService } from './nesflis-user.service';
import { UserResolver } from './nesflis-user.resolver';

@Module({
  imports: [],
  providers: [UserResolver, UserService],
})
export class UserModule {}
