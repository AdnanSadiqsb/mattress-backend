const mongoose=require('mongoose')
const mongoURL='mongodb+srv://adnansadiq:fa19bse036@cluster0.v1frm.mongodb.net/shkeelfoam?authSource=admin&replicaSet=atlas-8p440y-shard-0&readPreference=primary&ssl=true'

const connectToMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("connexting to mongoose")

    })
}

module.exports=connectToMongo;