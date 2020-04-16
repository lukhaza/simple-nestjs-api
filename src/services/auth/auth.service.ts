/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';


export enum Provider {
    GOOGLE = 'google'
}

let thirdPartyId: string;

@Injectable()
export class AuthService {
    user: User;
    foundUser: User;
    private readonly JWT_SECRET_KEY = 'VERY_SECRET_KEYonemonringthishazaar'; // <- replace this with your secret key

    constructor(private readonly usersService: UsersService) {
    };

    async validateOAuthLogin(profile: any, provider: Provider): Promise<string> {
        try {
            // You can add some registration logic here, 
            // to register the user using their thirdPartyId (in this case their googleId)
            this.user = new User(profile.id, profile.displayName, profile.name.givenName, profile.name.familyName, profile.emails[0], profile.photos[0], profile.provider)
            // console.log(this.user);
            this.foundUser = await this.usersService.findOneByThirdPartyId(this.user);
 
            if (!this.foundUser){
                await this.usersService.insertUser(this.user);
                console.log('user added')
            } else {
                console.log('user exists')
            }
            // console.log(this.usersService.getAllUsers());
               
            // }
                

            const payload = {
                thirdPartyId,
                provider
            }

            const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 36000 });
            return jwt;
        }
        catch (err) {
            throw new InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }

}