import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt')
{
    
    constructor(/*private readonly authService: AuthService*/) {
        super({
            jwtFromRequest:
                function(req: any):any {
                    let cookie = null;

                    // bearerToken = req.headers.authorization.split(' ')[1]
                    cookie = (req.headers.cookie.split('=')[1]);

                    if (req.headers.authorization)
                    {
                        return req.headers.authorization.split(' ')[1]; // bearerToken
                    } if (cookie)
                    {
                        return cookie
                    } 
                    return null;
                }
            ,
            // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'VERY_SECRET_KEYonemonringthishazaar'

            
        });
    }


    async validate(payload, done: Function) {
        try {
            console.log('jwt-strategy')
            console.log(payload);
            // You could add a function to the authService to verify the claims of the token:
            // i.e. does the user still have the roles that are claimed by the token
            //const validClaims = await this.authService.verifyTokenClaims(payload);

            //if (!validClaims)
            //    return done(new UnauthorizedException('invalid token claims'), false);

            done(null, payload);
        }
        catch (err) {
            throw new UnauthorizedException('unauthorized', err.message);
        }
    }

}