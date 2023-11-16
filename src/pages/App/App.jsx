import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NotesPage from "../NotesPage/NotesPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from '../../utilities/users-service';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notesArr, setNotesArr] = useState([]);
  return (
    <main className="App">
      { user ?
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/notes" element={<NotesPage notesArr={notesArr} setNotesArr={setNotesArr}/>} />
        {/* <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/orders/new" element={<NewOrderPage />} /> */}
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
