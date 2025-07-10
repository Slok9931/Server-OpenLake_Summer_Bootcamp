const express=require('express');


const router = express.Router();
router.get('/',async( req,res)=>{
    res.send( 'welcome  ');
});

router.get('/about', async (req, res) => {
  res.send('About Page');
});


module.exports=router;
