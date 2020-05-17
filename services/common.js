const constant = require('../constant');
const https = require('https');
class Common {
    
   /* Function : To set GET method request options 
    * Input : 
    * Output :
    */
    getGETMethodOptions(path, data = '') {
        return {
            hostname : constant.api.base_url,
            path : path+data,
            method : "GET",
            headers: {
                'Authorization': constant.api.auth_token
              }
        }
    }

    /* Function : To send HTTP request  
    * Input : 
    * Output :
    */
    sendHTTPRequest(options) {
        return new Promise((resolve, reject) => {
            const request = https.request(options, response => {
                let data = '';
                console.log(`Status Code : ${response.statusCode}`)
                if(response.statusCode == 200) {
                    response.on('data', (chunk) => {
                         data += chunk;
                    }).on('end', () => {
                            resolve(JSON.parse(data));
                    });
                }else
                    reject(response);
            });
            request.on('error', error => {
                reject(error);
            });
            request.end();
        });
    }
}

module.exports = new Common();