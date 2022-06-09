import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestjs_mongo_demo'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
