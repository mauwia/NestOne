import * as mongoose  from 'mongoose'

export const PostsSchema=new mongoose.Schema({ 
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},  
    caption:{type:String,required:true},
    imagelink:{type:String,required:true},
    // username:{type:String,required:true},
})

export interface Posts extends mongoose.Document{
    userId:string;
    id:string;
    caption:string;
    imagelink:string;
    // username:string; 
}
