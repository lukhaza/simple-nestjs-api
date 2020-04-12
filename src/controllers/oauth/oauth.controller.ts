import { Controller, Get, UseGuards, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { environment } from '../../environment';

@Controller('auth')
export class OauthController {
    
    @Get('google')
    @UseGuards(AuthGuard('google'))
    googleLogin()
    {
        // initiates the Google OAuth2 login flow
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req, @Res() res)
    {
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        if (jwt)
            res.redirect(`http://${environment.host}:4200/login/succes/${jwt}`);
        else 
            res.redirect(`http://${environment.host}:4200/login/failure`);
    }

    @Get('protected')
    @UseGuards(AuthGuard('jwt'))
    protectedResource()
    {
        return 'JWT is working!';
    }
    
}