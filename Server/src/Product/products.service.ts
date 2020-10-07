import {Injectable, NotFoundException} from '@nestjs/common'
import {Products} from './products.model'
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose'
@Injectable()
export class ProductsServices{
    products: Products[]=[]
    constructor(@InjectModel('Product') private readonly productModel:Model<Products>){}
    async insertProduct(caption:string,imagelink:string,userId:string){
        // let id=(Math.floor(Math.random()*10)).toString()
        // console.log(title,desc)
        const newProduct=new this.productModel({caption,imagelink,userId})
         let result=await newProduct.save()
        return result 
        }
    async allproducts(){
        let products=await this.productModel.find().populate('userId',"username imagelink")
        return products as Products[]
    }
    async alluserposts(userId){
        let userPosts=await this.productModel.find({userId}).populate('userId','username imagelink')
        return userPosts
    }
    async singleProduct(prodid:string){
        let product=await this.findProduct(prodid)
        return product
    }
    async updateProduct(prodid:string,caption:string,imagelink:string){
        let updProd=await this.findProduct(prodid) 
        
        if(caption){
            updProd.caption=caption
        }
        if(imagelink){
            updProd.imagelink=imagelink
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
         product= await this.productModel.findById(id).populate('userId','username imagelink')
        }catch(err){
            throw new  NotFoundException("Could not find Exception")
        }
        if(!product)
            throw new  NotFoundException("Could not find Exception")
        return product
    }
}