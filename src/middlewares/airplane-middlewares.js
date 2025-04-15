const {StatusCodes}=require('http-status-codes');


function validateCreateRequirest(req,res,next){
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            message:'something went worng while creating airplanes',
            data:{},
            error:{exceptions:'Model Number not found in the oncoming reqest in the correct form'}
        })
    }
    next();
} 

module.exports={
    validateCreateRequirest
}