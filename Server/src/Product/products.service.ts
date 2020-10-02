import {Injectable, NotFoundException} from '@nestjs/common'
import {Products} from './products.model'
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose'
@Injectable()
export class ProductsServices{
    products: Products[]=[]
    constructor(@InjectModel('Product') private readonly productModel:Model<Products>){}
    async insertProduct(title:string,desc:string,price:number){
        // let id=(Math.floor(Math.random()*10)).toString()
        // console.log(title,desc)
        const newProduct=new this.productModel({title,description:desc,price})
         let result=await newProduct.save()
        return result.id as string
    }
    async allproducts(){
        let products=await this.productModel.find().exec()
        return products as Products[]
    }
    async singleProduct(prodid:string){
        let product=await this.findProduct(prodid)
        return product
    }
    async updateProduct(prodid:string,title:string,desc:string,price:number){
        let updProd=await this.findProduct(prodid) 
        
        if(title){
            updProd.title=title
        }
        if(desc){
            updProd.desc=desc
        }if(price){
            updProd.price=price
        }
        await updProd.save()
        return updProd

    }
    async deleteProduct(prodid:string){
       await this.productModel.findByIdAndDelete(prodid)
       return null
    }
    private async findProduct(id:string):Promise<Products>{
        let product
        try{
         product= await this.productModel.findById(id)
        }catch(err){
            throw new  NotFoundException("Could not find Exception")
        }
        if(!product)
            throw new  NotFoundException("Could not find Exception")
        return product
    }
}