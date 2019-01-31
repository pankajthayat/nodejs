const yargs = require('yargs');

const geocode=require('./geocode/geocode');

const weather=require("./weather/weather")
console.log("app starting..........")

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: "address to fetch weather for ",
            string: true
        }
    })
    .help()
    .alias('help', 'h')// alias for help
    .argv;// takes all the config
// string : takes boolean ... this tells yargs to always parse the a
//as string not sth else... this is just to
// make our app full proof



let address = argv.address;

geocode.geocodeAddress(address,(errorMessage,results)=>{
if(errorMessage)
{
    console.log(errorMessage);
}
else{
    console.log(JSON.stringify(results,undefined,2))
    weather.getWeatherForcast(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
        if(errorMessage)
        {
            console.log(errorMessage);
        }
        else{
            console.log(JSON.stringify(weatherResults))
        }
    })
}
});

//90fe795347a14122e82822283ca59e48


//https://api.darksky.net/forecast/[key]/[latitude],[longitude]