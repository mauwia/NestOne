import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './Post/posts.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    PostsModule,
    MongooseModule.forRoot(
      'mongodb+srv://mauwia12:nestonep@cluster0.arej3.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true
      }
    ),
    AuthModule,

  ],

})
export class AppModule {}