import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NotesPage from "../NotesPage/NotesPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from '../../utilities/users-service';
import { getNotes } from "../../utilities/notes-api"
import './App.css';

export default function App() {
  async function notes(){
    try {
      const noteArr = await getNotes();
      console.log(noteArr);
      setNotesArr(noteArr);
    } catch (error) {
      console.log(error)
    }
  }
  const [user, setUser] = useState(getUser());
  const [notesArr, setNotesArr] = useState([]);
  //notes();
  //console.log(notes());
  //add uttilities
  return (
    <main className="App">
      { user ?
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/notes" element={<NotesPage notesArr={notesArr} setNotesArr={setNotesArr} user={user}/>} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
