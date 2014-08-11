var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/post',function(req,res,next){
    console.log(req.body.a);
    res.json({status:1,msg:'message from server'});
});

module.exports = router;
