const express=require('express');
const router=express.Router();

const {infoController}=require('../../controllers');
const AirplainRoutes=require('./airplane-route');


router.use('/airplanes',AirplainRoutes);

router.get('/info',infoController.info);




module.exports=router;