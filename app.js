console.log("starting app");
const fs =require('fs');
fs.appendFile('greeting.text','Hello world !',(err)=>{
    if(err)
    {
        console.log("unable to append the file");
    }
    else{
        console.log("append successfully");
    }
})