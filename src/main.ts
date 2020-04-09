import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { ApplicationModule } from './app.module';
import 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // Add socket.io on your http server
  app.useWebSocketAdapter(new WsAdapter(app.getHttpServer()));
  // Connecting sockets to the server and adding them to the request
  // so that we can access them later in the controller
  const io = socketio(app.getHttpServer());
  app.set('io', io);

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(expressSession({
    secret: 'SECRET_SESSION',
    resave: true,
    saveUninitialized: true,
  }));


  await app.listen(3000);


  // await app.listen(3000);
}
bootstrap();
