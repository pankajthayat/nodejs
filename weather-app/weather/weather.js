
const request=require('request')


const key='90fe795347a14122e82822283ca59e48';


//1st arg in request is options here
const getWeatherForcast=(latitude,longitude,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
        json:true
    },(error,response,body)=>{
       // console.log(body)
        if(!error&&response.statusCode==200)
        {
            let weather={
                temperature:body.currently.temperature,
                summary:body.currently.summary,
                apparentTemperature:body.currently.apparentTemperature
        
            }
            callback(undefined,weather);
            
        }
        else{
            callback("unable to fetch the weather");
           
        }
            
    })
    }


    module.exports.getWeatherForcast=getWeatherForcast;