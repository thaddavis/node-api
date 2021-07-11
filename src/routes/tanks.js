const { Tank } = require('../db/models/Tank')
const router = require('express').Router();

router.route('/')
.post(function (req, res) {
    // create tank data

    console.log(req.body)

    const small = new Tank({ 
      name: 'small',
      size: 'small' 
    });
    small.save(function (err) {
      if (err) {
        // return handleError(err);
        res.send(err.toString())
      } else { res.send('created tank data') }
    });

    
  })
  
router.route('/')
  .get(function (req, res) {
    // get and send tank data
    // res.send('get tank data')

    Tank.find({}, function(err, users) {
      var userMap = {};
  
      users.forEach(function(user) {
        userMap[user._id] = user;
      });
  
      res.send(userMap);  
    });
  });

module.exports = router;