import { useState } from "react";

export default function NotesPage({notesArr, setNotesArr}){
    const notes = notesArr.map((n, idx) => <div key={idx}> <p>{n.note}</p> <p>{n.createdAt.toDateString()}</p> </div>);
    const [newNote, setNewNote] = useState({
        note: '',
        createdAt: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setNewNote({ ...newNote, [evt.target.name]: evt.target.value, createdAt: new Date() });
        setError('');
    }
    async function handelSubmit(evt){
        evt.preventDefault();
        const commindedNotes = notesArr;
        commindedNotes.push(newNote);
        try {
        await setNotesArr(commindedNotes);
        setNewNote({
            note: '',
            createdAt: ''
        });
        } catch {
        console.log(error)
        setError('Note Create Failed - Try Again');
        }
    }
    return(
        <>
        <h1>Notes Page</h1>
        <div className="form-container">
                    <form autoComplete="off" onSubmit={handelSubmit}>
                    <label>New Note</label><br/>
                    <textarea name="note" value={newNote.note} onChange={handleChange} cols="30" rows="10" required/>
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