const fs=require("fs");

const addNote=(title,body)=>{
    let notes=[];
    let note={
        title,
        body
    }
    try{
        notes=JSON.parse(fs.readFileSync("notes-data.json"));
    }
    catch(e)
    {
        console.log("Exception occured : ",e);
    }
    notes.push(note);
    fs.writeFileSync("notes-data.json",JSON.stringify(notes));
}

const getAll=()=>{
    console.log("getting all notes");
};

const getNote=(title)=>{
    console.log("getting note : ",title);
}

const removeNote=()=>{
    console.log("removing note : ")
}

module.exports={
    addNote,
    getAll,
    getNote
}