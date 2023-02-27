import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { Neo4jModule } from 'nest-neo4j/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example-kafka/example.module';
import { ExampleRpcModule } from './example-rpc/example-rpc.module';
import { ExampleRpcClientModule } from './example-rpc-client/example-rpc-client.module';
import { JwtModule } from '@nestjs/jwt';
import { ExampleJwtModule } from './example-jwt/example-jwt.module';

@Module({
  imports: [
    ExampleModule,
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN'),
        },
      }),
    }),
    Neo4jModule.forRoot({
      scheme: 'neo4j',
      host: '44.211.51.105',
      port: 7687,
      username: 'neo4j',
      password: 'web-tars-streams'
    }),
    // SentryModule.forRoot({
    //   dsn: 'https://ed50f7b30fa14e96b64c244bf1a7304c@o1374541.ingest.sentry.io/4504724665073664',
    //   debug: true,
    //   environment: 'dev',
    //   release: 'some_release', // must create a release in sentry.io dashboard
    //   logLevels: ['debug'] //based on sentry.io loglevel //
      
    // }),
    ExampleRpcModule,
    ExampleRpcClientModule,
    ExampleJwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
