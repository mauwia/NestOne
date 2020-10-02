import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {ProductsController} from './products.controller'
import {ProductsServices} from './products.service'
import {ProductsSchema} from './products.model'

@Module({
    imports:[MongooseModule.forFeature([{name:"Product",schema:ProductsSchema}])],
    controllers:[ProductsController],
    providers:[ProductsServices]
})
export class ProductModule{}