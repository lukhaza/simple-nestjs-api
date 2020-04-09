import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomorgService } from './services/randomorg/randomorg.service';
import { OauthService } from './services/oauth/oauth.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, RandomorgService, OauthService],
})
export class AppModule {}
