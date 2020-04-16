import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomorgService } from './services/randomorg/randomorg.service';
import { DatascraperService } from './services/datascraper/datascraper.service';
import { OauthController } from './controllers/oauth/oauth.controller';
import { OauthModule } from './modules/oauth/oauth.module';
import { GoogleStrategyService } from './services/google-strategy/google-strategy.service';
import { AuthService } from './services/auth/auth.service';
import { JwtStrategyService } from './services/jwt-strategy/jwt-strategy.service';
import { UsersService } from './services/users/users.service';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [HttpModule, OauthModule],
  controllers: [AppController, OauthController, UsersController],
  providers: [AppService, RandomorgService, DatascraperService, GoogleStrategyService, AuthService, JwtStrategyService, UsersService],
})
export class AppModule {}
