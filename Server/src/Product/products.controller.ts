import {Controller,Post,Body, Get, Param, Patch, Delete} from '@nestjs/common'
// import { FileInterceptor } from '@nestjs/platform-express'
import {ProductsServices} from './products.service'
@Controller('post')
export class ProductsController {
    constructor(private readonly productServices:ProductsServices){}
    @Post()
    async addProducts(
        @Body('caption') caption:string,
        @Body('imagelink')  imagelink:string,
        @Body('userId') userId:string
    ){
        // console.log(title)
        let result=await this.productServices.insertProduct(caption,imagelink,userId)
        return result
    }
    
    @Get()
    async getAllProducts(){
        const products=await this.productServices.allproducts()
        return products
    }
    @Get("user/:id")
    async getUserPosts(@Param('id') userId:string){
        const userPosts=await this.productServices.alluserposts(userId)
        return userPosts
    }
    @Get(":id")
    getProduct(@Param('id') id:string){
        return this.productServices.singleProduct(id)
    }
    @Patch(":id")
    async updateProduct(@Param('id') id:string,@Body('caption') caption:string,@Body('imageLink')  imageLink:string){
        return await  this.productServices.updateProduct(id,caption,imageLink)
    }
    @Delete(":id")
    async deleteProduct(@Param("id") id:string){
        await this.productServices.deleteProduct(id)
        return "deleted"
    }
}