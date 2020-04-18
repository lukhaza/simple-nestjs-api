import { Module } from '@nestjs/common';
import { UserSchema } from 'src/services/users/user.model';
import { UsersService } from 'src/services/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from 'src/controllers/users/users.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [MongooseModule],
})
export class UsersModule {}
