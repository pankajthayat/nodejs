const yargs =require('yargs');
const request=require('request');
console.log("app starting..........")

const request = require('request');
const argv=yargs
.options({
a:{
demand: true,
alias: 'address',
describe:"address to fetch weather for ",
string:true
}
})
.help()
.alias('help','h')// alias for help
.argv;// takes all the config
// string : takes boolean ... this tells yargs to always parse the a
//as string not sth else... this is just to
// make our app full proof


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