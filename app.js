console.log("starting app");
const fs =require('fs');// require lets us load the module functionality and call is down below
const os=require('os');
var user=os.userInfo();

const notes=require('./notes');// give reletive path... this is nota module but a file... so reletive path

var res=notes.addNote();
console.log(res)