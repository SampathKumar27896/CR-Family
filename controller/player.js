const constant = require('../constant.json');
const https = require('https');
const Common = require('../services/common');
const PLAYER_IDS = ["#CP0QY9LL","#8VLUUVYY","#RY0YQRQ"];
const player_info_url = constant.api.player_info_url;

class Player {

    getPlayerInfo(req, res) {
        // let options = []; 
        // PLAYER_IDS.forEach((item, index) => {
        //     options[index] = Common.getGETMethodOptions(player_info_url, encodeURI(item));
        // });
        // Promise.all([Common.sendHTTPRequest(options[0]),Common.sendHTTPRequest(options[1]),Common.sendHTTPRequest(options[2])])
        // .then(results => {
        //     res.render('index',{player_info : this.setPlayerInfo(results)})
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        res.render('index')
    }

    setPlayerInfo(results){
        let playerInfo = [], playerObject = {};
        results.forEach((item, index) => {
            playerObject = {};
            playerObject.name = item.name;
            playerObject.expLevel = item.expLevel;
            playerObject.trophies = item.trophies;
            playerObject.wins = item.wins;
            playerObject.losses = item.losses;
            playerInfo[index] = playerObject;
        });
        return playerInfo;

    }
}

module.exports = new Player();