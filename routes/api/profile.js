// things like location , bio , experience , social networks 
// can call it as users auth

const express = require('express');

const router = express.Router();

router.get('/test' , (req , res) => res.json({msg:"Posts Works"}));
module.exports = router;