const Validator=require('validator');

const isEmpty =require('./isEmpty');

const validateProductCreate=({name,price})=>{
    let errors={};
    if(isEmpty(name)){
        errors.name='Name is required';
    }
    else{
        if(!Validator.isLength(name, {min:1,max:30})){
            errors.name='Name needs to be bewtween 1 and 30';
        }
    }

    if(isEmpty(price)){
        errors.price='Price is required';
    }
    return({
        errors,
        isValid:isEmpty(errors)
    })
}
module.exports={
    validateProductCreate
}