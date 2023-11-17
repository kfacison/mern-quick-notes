import { useState } from "react";
import {addNote} from "../../utilities/notes-api"


export default function NotesPage({notesArr, setNotesArr, user}){
    const notes = notesArr.map((n, idx) => <div key={idx}> <p>{n.text}</p> </div>);
    const [newNote, setNewNote] = useState({
        text: '',
        user: user._id
    });

    function handleChange(evt) {
        setNewNote({ ...newNote, [evt.target.name]: evt.target.value});
    }
    async function handelSubmit(evt){
        evt.preventDefault();
        
        // const commindedNotes = notesArr;
        // commindedNotes.push(newNote);
        try {
            const newNotesArr=await addNote(newNote);
        await setNotesArr(newNotesArr);
        setNewNote({
            note: '',
            createdAt: ''
        });
        } catch(error) {
        console.log(error);
       // setError('Note Create Failed - Try Again');
        }
    }
    return(
        <>
        <h1>Notes Page</h1>
        <div className="form-container">
                    <form autoComplete="off" onSubmit={handelSubmit} className="notes">
                    <label className="notes">New Note</label><br/>
                    <textarea name="text" value={newNote.text} onChange={handleChange} cols="30" rows="10" required/>
                    <button type="submit" >Add Note</button>
                    </form>
                </div>

        { notes[0]!==undefined ?
        notes
        :
        "No Notes Yet!"
        }
        </>
    );
}