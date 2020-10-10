import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {PostsController} from './posts.controller'
import {PostsServices} from './posts.service'
import {PostsSchema} from './posts.model'

@Module({
    imports:[MongooseModule.forFeature([{name:"Post",schema:PostsSchema}])],
    controllers:[PostsController],
    providers:[PostsServices]
})
export class PostsModule{}