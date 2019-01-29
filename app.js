console.log("starting app");
const argv=require('yargs').argv;
console.log("yargs : ",argv);
const title=argv.title; const body=argv.body;
console.log("title : "+title+"  body : "+body);

const x=require("./notes");
x.addNote(title,body);
// if(command=="add")
// {

// }
