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

export function HandleAPIError(error, data){
    if(error.toString().includes('Network Error')){
        return {title: "Network Error", msg: "Service unavailable, check again in few minutes"}
    }
    else if(error.response && error.response.status){
        if(error.response.status === 403){
            return {title: "API Error (403)", msg: "Couldn't fetch data from API. Please, contact administrator"}
        }
        else if (error.response_status === 401){
            return {title: "Wrong Request (401)", msg: "Unable to fetch data for this request"}
        }
    }
    return data
}