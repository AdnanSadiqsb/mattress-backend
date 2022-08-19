const express=require('express')
const router=express.Router()

const Items=require('../models/Item')

//Route:1 get all items GET "/api/items/fetchItems Login not required"

router.get('/fetchItems',async(req,res)=>{
    let success=false
    try{
        const items=await Items.find()
        success=true
        res.json({success:success, items:items})
    }
    catch(error){
        res.json({success:success, errro:error})


    }
   
})

//Route:2 add new items POST "/api/items/addItem Login required"
// upload.single("image") ,
router.post('/addItem',async(req,res)=>{

    
    let success=false
    try{
        const {name, actualPrice, discountPrice,status,category, image}=req.body
        const item = new Items({
            name, actualPrice, discountPrice,status,category, image
    
        })
        const newItem=await item.save()
        success=true
        res.json({newItem:newItem,success:success})
    }
    catch(error){
        res.json({success:success, errro:error})

    }
})

router.put('/updateItem/:id',async(req,res)=>{
    let success=false
    try{
        const newItem=req.body
        let item =await Items.findById(req.params.id)
        if(!item)
        {
            return res.status(404).send("not found")
        }
        item = await Items.findByIdAndUpdate(req.params.id, {$set: newItem},{new :true})
        success=true
        res.json({item:item,success:success})
    }
    catch(error)
    {
        res.json({success:success, errro:error})

    }



})

router.delete('/deleteItem/:id', async(req,res)=>{
    let success =false
    try{

        let item = await Items.findById(req.params.id)
        if(!item)
        {
            return res.json({success:success,error:"item not found"})
        }
        item =await Items.findByIdAndDelete(req.params.id)
        success=true
        res.json({success:success,item:item})
    }catch(error)
    {
        res.json({success:success, errro:error})

    }

})


module.exports=router