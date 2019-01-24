console.log("starting app");
const fs =require('fs');// require lets us load the module functionality and call is down below
const os=require('os');
var user=os.userInfo();

const notes=require('./notes');// give reletive path... this is nota module but a file... so reletive path


const _ =require('lodash');
console.log(_.isString("pankaj"))
console.log(_.isString(true))

var filteredArray=_.uniq(["pankaj",1,"pankaj",1,2])
console.log(filteredArray)

// fs.appendFile('greeting.text',`Hello ! ${user.username}. you are ${notes.age}`,(err)=>{
//     if(err)
//     {
//         console.log("unable to append the file");
//     }
//     else{
//         console.log("append successfully");
//     }
// })

// //most of Node's API will pass an error as the first argument to all of its functions known as error-first callbacks