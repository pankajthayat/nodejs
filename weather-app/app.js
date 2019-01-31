const argv =require('yargs').argv;
const request=require('request');
console.log("app starting..........")
let address=argv.address;

address=encodeURIComponent(address);
console.log(address);

request({
    url:"http://www.mapquestapi.com/geocoding/v1/address?key=Osdd59ApeBNKnfmtXdJgVLAGmK29E7LR&location="+address,
    json:true
},(error,response,body)=>{
   // console.log("error : ",error);
    //console.log("response : ",response);
    // console.log("body : ",JSON.stringify(body,undefined,2));
    console.log(`provided address : ${body.results[0].providedLocation.location}`)
    console.log(`lattitue : ${body.results[0].locations[0].latLng.lat}`)
    console.log(`longitude : ${body.results[0].locations[0].latLng.lng}`)
})