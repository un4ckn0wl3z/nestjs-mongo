import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.constroller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { User, UserSchema } from './schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository]
})

export class UsersModule {}