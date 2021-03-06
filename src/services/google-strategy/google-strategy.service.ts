import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { AuthService, Provider } from '../auth/auth.service';
import { environment } from '../../environment';
import { UsersService } from '../users/users.service';

@Injectable()
export class GoogleStrategyService extends PassportStrategy(Strategy,'google') {
    constructor(private readonly authService:AuthService){
        super({
            clientID    : '721784170333-9f2m47cb85jpa5s74hnpppsu0nvqelq7.apps.googleusercontent.com',     // <- Replace this with your client id
            clientSecret: 'y3rQDRXANJS9Pikhfa3sqfY8', // <- Replace this with your client secret
            callbackURL : `http://${environment.hostApi}/auth/google/callback`,
            passReqToCallback: true,
            scope: ['profile','email']
        })
    }
    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function)
    {
        try
        {
            // console.log(profile);
            console.log(profile.emails[0]['value'])
            const jwt = await this.authService.validateOAuthLogin(profile, Provider.GOOGLE) // might be slower than profile.id
            const user = 
            {
                jwt
            }
            // console.log(jwt);
            done(null, user);
            
        }
        catch(err)
        {
            // console.log(err)
            done(err, false);
        }
    }


}
