const request = require('request');

const geocode=(address,callback)=>{
    address = encodeURIComponent(address);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=Osdd59ApeBNKnfmtXdJgVLAGmK29E7LR&location=${address}`,
        json: true
    }, (error, response, body) => {
         //console.log("error : ",error);
        //console.log("response : ",response);
        //console.log("body : ",JSON.stringify(body,undefined,2));
        if(error)
        {
            callback("unable to find that address");
        }
        else if(body==undefined)
        {
            callback("bad request");
        }
        else if(body.info.statuscode==400)
        {
            callback("bad request");
        }
        else if(body.info.statuscode==0){
           // console.log(JSON.stringify(body,undefined,2))
            callback(undefined,{
                address : `${body.results[0].providedLocation.location}`,
                latitude : `${body.results[0].locations[0].latLng.lat}`,
                longitude : `${body.results[0].locations[0].latLng.lng}`
            })
    
        }
        else
        {
            callback("something went wrong")
        }
    })
};





module.exports.geocodeAddress=geocode;

