const express =require("express");

const router=express.Router();

const {defaultControler,testRoute,searchResponse}=require("../Controler/controler.js");
const {analyzeBLogs}=require("../Middleware/middleware.js")


router.route("/blog-stats").get(analyzeBLogs,defaultControler);
router.route("/blog-search").get(analyzeBLogs,searchResponse)
router.route("/").get(testRoute)

module.exports=router;