import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({user, setUser}){
    function handleLogOut(){
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }
    return (
        <nav>
            <Link to="/notes">Notes</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
            <p>Welcome, {user.name}</p>
        </nav>
    );
}