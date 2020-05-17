const express = require('express');
const router = express.Router();
const player = require('../controller/player');



    /* Function : To get player info
    * Input : 
    * Output :
    */
    router.get('/', (req, res) => {
        player.getPlayerInfo(req, res);
    });


module.exports = router;