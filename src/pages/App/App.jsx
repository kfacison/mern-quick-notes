import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NotesPage from "../NotesPage/NotesPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from '../../utilities/users-service';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notesArr, setNotesArr] = useState([]);
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
