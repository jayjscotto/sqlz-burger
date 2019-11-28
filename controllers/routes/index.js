var express = require('express');
var router = express.Router();
var db = require("../.././models");


/* GET home page. */
router.get('/', function(req, res, next) {
  //get all burgers from db
  db.burger.findAll().then(function(data) {
    let burgersArr = [];
    
    //for loop to iterate through returned sequelize object from the database and push it to an array
    for (let i = 0; i < data.length; i++) {
      burgersArr.push(data[i].dataValues);
    }
    //handlebars object to render burgers
    let burgersObj = {
      burgers: burgersArr
    }
    res.render('index', {body: 'layout', title: 'Eat-Dis-Burger', burgersObj: burgersObj});
  })
  
});

router.post('/api/new-burger', function(req, res, next) {
  let newBurger = req.body.burger;
  
  db.burger.create({
    burger: newBurger
  }).then(function() {
    return res.status(200).end();
  });

});




router.put('/api/:burgerID', function (req, res, next) {
  //burger being edited
  let updatedBurger = req.params.burgerID;

  try { db.burger.update( { eaten: true },
      { where: { id: updatedBurger } 
    }).then(function(data) {

       return res.json(data);
    })
  } catch (err) {
    console.log(err)
  }

});

router.delete('/api/:burgerID', function (req, res, next) {
  let chosenBurger = req.params.burgerID;

  try { db.burger.destroy({
    where: {
      id: chosenBurger
    }
  }).then(function(data) {
    return res.json(data);
  })
  } catch (err) {
    console.log(err)
  }

});


module.exports = router;
