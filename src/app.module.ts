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
import { UsersController } from './controllers/users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [
    HttpModule,
    UsersModule,
    OauthModule,
    MongooseModule.forRoot(
      'mongodb+srv://api-user:It1q46r5KvUHZfpc@cluster0-lx1ah.azure.mongodb.net/lukhanyoml?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController, OauthController, UsersController],
  providers: [AppService, RandomorgService, DatascraperService, GoogleStrategyService, AuthService, JwtStrategyService, UsersService],
})
export class AppModule { }
