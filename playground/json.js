
const fs=require('fs');

var obj={
    name:"pankaj",
    age:24,
    place:"bangalore"
}

fs.writeFileSync('notes.json',JSON.stringify(obj));

var noteString=fs.readFileSync('notes.json');


console.log("String : "+typeof(noteString));

var noteObj=JSON.parse(noteString);
console.log(noteString)
console.log("parsed note : "+typeof(noteObj));
console.log(noteObj.name);