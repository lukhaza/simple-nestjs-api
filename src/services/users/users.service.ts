import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
    users: User[] = [];

    async insertUser(newUser: User) {
        await this.users.push(newUser);
    }
    async findOneByThirdPartyId(user: User){
        // console.log(user.id);
        // console.log('===========before-find==============');
        user = await this.users.find((dbuser)=> dbuser.id===user.id);

        // console.log(user);
        // console.log('===============after')
        return user;
    }
    getAllUsers(){
        return this.users;
    }

}
