var express = require('express');
var router = express.Router();


router.post('/login',(req,res,next)=>{
  const{id,password}=req.body;
  console.log(req,res,next);
  console.log("sex")
});
module.exports = router;
