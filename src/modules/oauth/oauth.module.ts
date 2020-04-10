import { Module } from '@nestjs/common';
import { OauthController } from '../../controllers/oauth/oauth.controller';
import { OauthService } from '../../services/oauth/oauth.service';
import { GoogleStrategyService } from '../../services/google-strategy/google-strategy.service'
import { AuthService } from '../../services/auth/auth.service'
import { JwtStrategyService } from 'src/services/jwt-strategy/jwt-strategy.service';

@Module({
    controllers: [OauthController],
    providers: [OauthService, GoogleStrategyService, AuthService, JwtStrategyService]
})
export class OauthModule { }
