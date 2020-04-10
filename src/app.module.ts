import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomorgService } from './services/randomorg/randomorg.service';
import { OauthService } from './services/oauth/oauth.service';
import { DatascraperService } from './services/datascraper/datascraper.service';
import { OauthController } from './controllers/oauth/oauth.controller';
import { OauthModule } from './modules/oauth/oauth.module';
import { GoogleStrategyService } from './services/google-strategy/google-strategy.service';
import { AuthService } from './services/auth/auth.service';
import { JwtStrategyService } from './services/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [HttpModule, OauthModule],
  controllers: [AppController, OauthController],
  providers: [AppService, RandomorgService, OauthService, DatascraperService, GoogleStrategyService, AuthService, JwtStrategyService],
})
export class AppModule {}
