import { Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Query } from '@nestjs/graphql';
import { User } from './user.model';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }
}
