var express = require('express');
var router = express.Router();
var db = require('../db');


router.get('/all', function(req, res, next) {
  db.query("select * from logs", (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

//select by ID
/*
router.get('/all/:id', function(req, res, next) {
  db.query('select from logs where ID=?',[req.params.id], (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});
*/

//select by username

router.get('/all/:username', function(req, res, next) {
  db.query('select from logs where username=?',[req.params.username], (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

// delete by ID
/*
router.get('/all/:id', function(req, res, next) {
  db.query('delete from logs where ID=?',[req.params.id], (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
	  console.log("deleted")
    res.send("deleted");
  });
});
*/
//router.get('/genre/:genre', function(req, res, next) {
//  var sqlQuery = "select * from shopping_list where Buy=?";
//  db.query(sqlQuery, [req.params.rating], (error, result, fields) => {
//    if (error) {
//      res.status(500).send(error);
//    }
//    res.send(result);
//  });
//});


/*
router.post('/addShops', function(req,res,next){
  var query = "INSERT INTO shopping_list (ID, Item, Quantity, Buy) "
    +"VALUES ( ?, ?, ?, ?);"
  var queryParams = [
    req.body.ID,
    req.body.Item,
    req.body.Quantity,
    req.body.Buy
  ];

  db.query(query, queryParams, (error, result, fields) => {
    if (error){
      res.status(500).send(error);
    }
    res.status(201).send('RECORD INSERTED......');
  });
});
*/


module.exports = router;
