const express=require('express');
const router=express.Router();

const {AirplainController}=require('../../controllers');
const {AirplaneMiddlewares}=require('../../middlewares');

// -> /api/v1/airplanes POST
router.post('/',AirplaneMiddlewares.validateCreateRequirest,AirplainController.createAirplane);



module.exports=router;