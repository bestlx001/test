var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* get a new page */
router.get('/section',function(req,res){
	res.render('section',{title:'section'});
});