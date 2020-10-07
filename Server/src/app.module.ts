import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {MulterModule} from '@nestjs/platform-express'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/products.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [MulterModule.register({dest:'./files'}),
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://mauwia12:nestonep@cluster0.arej3.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true
      }
    ),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}