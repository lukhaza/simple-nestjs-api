import { Module } from '@nestjs/common';
import { OauthController } from '../../controllers/oauth/oauth.controller';
import { GoogleStrategyService } from '../../services/google-strategy/google-strategy.service'
import { AuthService } from '../../services/auth/auth.service'
import { JwtStrategyService } from 'src/services/jwt-strategy/jwt-strategy.service';
import { UsersService } from 'src/services/users/users.service';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [UsersModule],
    controllers: [OauthController],
    providers: [GoogleStrategyService, AuthService, JwtStrategyService, UsersService]
})
export class OauthModule { }
