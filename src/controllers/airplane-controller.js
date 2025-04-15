const {StatusCodes}=require('http-status-codes');

const {AirplaneService} = require('../services');


/*
#post: /airplanes
#req.body={modelNumber:'airbus320' capacity:200}

*/

async function createAirplane(req,res){
    try{
        const {modelNumber,capacity}=req.body;
        if(!modelNumber || !capacity){
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({
                success:false,
                message:'All fields is Required',
                data:{}
            });
        }
        const airplane=await AirplaneService.createAirplane({modelNumber:modelNumber,capacity:capacity});

        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Successfully create an Airplane',
            data:airplane,
            error:{}
        })

    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'Something went worng while creating Airplane',
            data:{},
            error:error
        });
    }
}



module.exports={
    createAirplane
}