import { Injectable, NotFoundException } from '@nestjs/common'
import { Posts } from './posts.model'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
@Injectable()
export class PostsServices {
    products: Posts[] = []
    constructor(@InjectModel('Post') private readonly postModel: Model<Posts>) { }
    async insertPost(caption: string, imagelink: string, userId: string) {
        try {
            const newProduct = new this.postModel({ caption, imagelink, userId })
            let result = await newProduct.save()
            return result
        } catch (err) {
            throw err
        }

    }
    async allposts() {
        try {
            let products = await this.postModel.find().populate('userId', "username imagelink")
            return products as Posts[]
        } catch (err) {
            throw err
        }
    }
    async alluserposts(userId) {
        try {
            let userPosts = await this.postModel.find({ userId }).populate('userId', 'username imagelink')
            return userPosts
        } catch (err) {
            throw err
        }
    }
    async singlePost(prodid: string) {
        try {
            let product = await this.findPost(prodid)
            return product
        } catch (err) {
            throw err
        }
    }
    async updatePost(prodid: string, caption: string, imagelink: string) {
        try {
            let updProd = await this.findPost(prodid)

            if (caption) {
                updProd.caption = caption
            }
            if (imagelink) {
                updProd.imagelink = imagelink
            }
            await updProd.save()
            return updProd
        } catch (err) {
            throw err
        }
    }
    async deletePost(prodid: string) {
        try {
            await this.postModel.findByIdAndDelete(prodid)
            return null
        } catch (err) {
            throw err
        }
    }
    private async findPost(id: string): Promise<Posts> {
        let product
        try {
            product = await this.postModel.findById(id).populate('userId', 'username imagelink')
        } catch (err) {
            throw new NotFoundException("Could not find Exception")
        }
        if (!product)
            throw new NotFoundException("Could not find Exception")
        return product
    }
}