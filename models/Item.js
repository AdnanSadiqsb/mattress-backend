const mongoose=require('mongoose')
const {Schema}=mongoose

const ItemSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true

    },
    status:{
        type:String,
        required:true

    },
    actualPrice:{
        type:String,
        required:true
    },
    discountPrice:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    image:{
        type:String
    }

})

module.exports=mongoose.model('Items',ItemSchema)
