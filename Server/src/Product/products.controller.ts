import {Controller,Post,Body, Get, Param, Patch, Delete} from '@nestjs/common'
import {ProductsServices} from './products.service'
@Controller('products')
export class ProductsController {
    constructor(private readonly productServices:ProductsServices){}
    @Post()
    async addProducts(
        @Body('title') title:string,
        @Body('description')  proDesc:string,
        @Body('price') proPrice:number
    ){
        console.log(title)
        let generatedId=await this.productServices.insertProduct(title,proDesc,proPrice)
        return {id:generatedId}
    }
    
    @Get()
    async getAllProducts(){
        const products=await this.productServices.allproducts()
        return products
    }
    @Get(":id")
    getProduct(@Param('id') id:string){
        return this.productServices.singleProduct(id)
    }
    @Patch(":id")
    async updateProduct(@Param('id') id:string,@Body('title') title:string,@Body('description')  proDesc:string,@Body('price') proPrice:number){
        return await  this.productServices.updateProduct(id,title,proDesc,proPrice)
    }
    @Delete(":id")
    async deleteProduct(@Param("id") id:string){
        await this.productServices.deleteProduct(id)
        return "deleted"
    }
}