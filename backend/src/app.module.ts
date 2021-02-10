import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module'; 
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';
import { AppGateway } from './app.gateway';

// import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule.forRoot({
    //     isGlobal: true,
    //     envFilePath: '.env',
    //   })],          
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'mysql', 
    //     host: '99doci.net', 
    //     port: 3306,
    //     username: 'root',
    //     password: 'roahdla99!',
    //     database: 'standard',  
    //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   }),
    //   inject: [ConfigService],  
    // }),
    TypeOrmModule.forRoot({ 
      type: 'mysql', 
      host: '99doci.net', 
      port: 3306,
      username: 'root',
      password: 'roahdla99!',
      database: 'standard',  
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      keepConnectionAlive: true 
      // synchronize: true,
    }),
    AuthModule,
    ChatModule, 
  ],
  controllers: [AppController],   
  providers: [AppGateway],   
})
export class AppModule {
  constructor(private readonly connection: Connection) {} 
}
    