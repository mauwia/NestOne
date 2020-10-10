import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common'
// import { FileInterceptor } from '@nestjs/platform-express'
import { PostsServices } from './posts.service'
@Controller('post')
export class PostsController {
    constructor(private readonly postsServices: PostsServices) { }
    @Post()
    async addPost(
        @Body('caption') caption: string,
        @Body('imagelink') imagelink: string,
        @Body('userId') userId: string
    ) {
        try { // console.log(title)
            let result = await this.postsServices.insertPost(caption, imagelink, userId)
            return result
        } catch (err) {
            throw err
        }
    }

    @Get()
    async getAllPosts() {
        try {
            const products = await this.postsServices.allposts()
            return products
        } catch (err) {
            throw err
        }
    }
    @Get("user/:id")
    async getUserPosts(@Param('id') userId: string) {
        try {
            const userPosts = await this.postsServices.alluserposts(userId)
            return userPosts
        } catch (err) {
            throw err
        }
    }
    @Get(":id")
    getPost(@Param('id') id: string) {
        try {
            const SinglePost = this.postsServices.singlePost(id)
            return SinglePost
        } catch (err) { throw err }
    }
    @Patch(":id")
    async updatePost(@Param('id') id: string, @Body('caption') caption: string, @Body('imageLink') imageLink: string) {
        try {
            let UpdatePost = await this.postsServices.updatePost(id, caption, imageLink)
            return UpdatePost
        }
        catch (err) {
            throw err
        }
    }
    @Delete(":id")
    async deletePost(@Param("id") id: string) {
        try {
            await this.postsServices.deletePost(id)
            return "deleted"
        } catch (err) {
            throw err
        }
    }
}