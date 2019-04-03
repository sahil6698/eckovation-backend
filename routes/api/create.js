const express=require('express');
const router=express.Router();

const Product=require('../../models/Product');
const isEmpty=require('../../Validation/isEmpty');
const {validateProductCreate}=require('../../Validation/product');

//@route GET api/product/create
//@desc product create route
//@access Public 
router.post('/create',async (req,res)=>{
    const {errors,isValid}=validateProductCreate(req.body);
    if(isValid){
            const name=req.body.name;
            const price=req.body.price;
            const fetchedProducts=await Product.find({name});
            console.log(fetchedProducts)
            if(!(fetchedProducts.length==0)){
                res.status(400).json({error:'Product with the same title already exists'});
            }else{
                const product=await new Product({
                    name,
                    price
                }).save();
                res.status(200).json(product)
            }
    }else{
            res.status(400).send(errors);
    }

})

//@route GET api/product/get-all
//@desc fetch all products
//@access Public 

router.get('/get-all',async (req,res)=>{
    const products=await Product.find();
    if(products.length==0){
        res.status(400).json({error:'No product exists'});
    }else{
        res.status(200).json(products)
    }
})
module.exports={
    router
}