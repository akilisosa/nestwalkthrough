import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig]

      // validationSchema: Joi.object({ // to validate object variables you are getting
      //   DATABASE_HOST: Joi.required(),
      //   DATABASE_PORT: Joi.number().default(5432),
      // })
      // envFilePath: '.environment'
      // ignoreEnvFile: true
    }),
    CoffeesModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({type: 'postgres', // type of our database
      host: process.env.DATABASE_HOST, // database host
      port: +process.env.DATABASE_PORT, // database host
      username: process.env.DATABASE_USER, // username
      password: process.env.DATABASE_PASSWORD, // user password
      database: process.env.DATABASE_NAME, // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    })
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
