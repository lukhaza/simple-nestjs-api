import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    users: User[] = [];
    constructor(@InjectModel('User') private readonly userModel: Model<User>
        ) {}

    async insertUser(profile) {
        const newUser = new this.userModel({
            id: profile.id,
            displayname: profile.displayName,
            givenname: profile.name.givenName,
            familyname: profile.name.familyName,
            email: profile.emails[0]['value'],
            photo: profile.photos[0]['value'],
            provider: profile.provider,
        });
        const result =  await newUser.save();
        return profile.id as string;
    }

    

    async findOneByThirdPartyId(userid: string) {
        const founduser = await this.users.find((dbuser) => dbuser.id.toString() === userid);
        return founduser;
    }


    async findUser(userid: string): Promise<User[]> {
        let user;
        try {
          user = await this.userModel.find({ id: userid }).exec() //findById(id).exec();
        } catch (error) {
            return null;
        //   throw new NotFoundException('Could not find product.');
        }
        if (!user) {
            return null;
        //   throw new NotFoundException('Could not find product.');
        }
        return user;
      }
    


}


