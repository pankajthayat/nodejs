console.log("starting app");
const argv=require('yargs').argv;
console.log("yargs : ",argv);
const title=argv.title; const body=argv.body;
console.log("title : "+title+"  body : "+body);
const command=argv._[0];
const x=require("./notes");

if(command=="add")
{
    x.addNote(title,body);
}
else if(command=="remove")
{
    x.removeNote();
}
else if(command=="get")
{
    x.getAll();
}
else if(command=="get note")
{
    x.getNote(title);
}
else{
    console.log("command not recognised");
};