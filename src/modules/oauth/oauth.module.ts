import { Module } from '@nestjs/common';
import { OauthController } from '../../controllers/oauth/oauth.controller';
import { GoogleStrategyService } from '../../services/google-strategy/google-strategy.service'
import { AuthService } from '../../services/auth/auth.service'
import { JwtStrategyService } from 'src/services/jwt-strategy/jwt-strategy.service';
import { UsersService } from 'src/services/users/users.service';

@Module({
    controllers: [OauthController],
    providers: [UsersService, GoogleStrategyService, AuthService, JwtStrategyService]
})
export class OauthModule { }
