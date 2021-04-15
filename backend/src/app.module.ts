import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';
import { AppGateway } from './app.gateway';
import { BoardModule } from './board/board.module';
import { AppService } from './app/app.service';
import { Splash } from './app/entities/splash.entity';
// import { SplashRepository } from './app/entities/splash.entity';
// import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          keepConnectionAlive: true,
        };
        // synchronize: true,
      },
    }),
    AuthModule,
    ChatModule,
    BoardModule,
    TypeOrmModule.forFeature([Splash]),
  ],
  controllers: [AppController],
  providers: [AppGateway, AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
