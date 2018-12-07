let fs = require("fs")

const isExist=(notes,newNote)=>{
    noteExist = notes.filter(el => el.title === newNote.title && el.body === newNote.body)
    if (noteExist.length > 0){
        return true
    }else{
        return false
    }
}

const add = (title,body) => {
    let notes = []    
    
    const newNote = {
        title,
        body
    } 
    
    try{
        let file = fs.readFileSync("note.json")
        notes = JSON.parse(file.toString())
    }
    catch(e){

    }

    if(!isExist(notes,newNote)){
        notes.push(newNote)

        json = JSON.stringify(notes)
        fs.writeFileSync("note.json",json)
        console.log("Note created")
    }else{
        console.log("Note exist")
    }
    
}

exports.add = add