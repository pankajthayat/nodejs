console.log("starting app");
const fs =require('fs');// require lets us load the module functionality and call is down below
const os=require('os');
var user=os.userInfo();
console.log(user);
fs.appendFile('greeting.text',`Hello ! ${user.username}`,(err)=>{
    if(err)
    {
        console.log("unable to append the file");
    }
    else{
        console.log("append successfully");
    }
})