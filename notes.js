const fs=require("fs");

const fetchNotes=()=>{
    try{
        return JSON.parse(fs.readFileSync("notes-data.json"));
    }
    catch(e)
    {
        return [];
    }
}
const saveNotes=(note)=>{
   
    fs.writeFileSync("notes-data.json",JSON.stringify(notes));
}
const addNote=(title,body)=>{
    let notes=fetchNotes();
    let note={
        title,
        body
    }

    let duplicateNote=notes.filter(note=>note.title===title);
    if(duplicateNote.length===0)
    {
        notes.push(note);
        saveNotes(notes);
    }
    else{
        console.log("cannot add : title already present ");
    }
    
}

const getAll=()=>{
    console.log("getting all notes");
};

const getNote=(title)=>{
    console.log("getting note : ",title);
}

const removeNote=(title)=>{
    console.log("removing note : ");
    let notes=fetchNotes();
    
    

}

module.exports={
    addNote,
    getAll,
    getNote,
    removeNote
}