console.log("starting notes.js");


//console.log(module);// inside all node file we have access to this variable 'module'
//export is an object in module property

module.exports.addNote=()=>{
    console.log("add note");
    return "new Note";
};