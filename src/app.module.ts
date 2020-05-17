import { PessoasModule } from './pessoas/pessoas.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PessoasModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/insta_project')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
