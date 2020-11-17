export function GenerateAPIHeaders(){
    var CryptoJS = require("crypto-js");

        const timestamp = new Date().getTime();
        let key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_API_KEY);
        let msg = CryptoJS.enc.Utf8.parse(timestamp);
        let headers = {
            'SWStats-Web-API': CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(msg, key)),
            'SWStats-Web-TS': timestamp,
        }
    return headers
}