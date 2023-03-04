import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <NavLink className="navlink" to={'/'}>Main page</NavLink>
            <NavLink className="navlink" to={'about'}>About page</NavLink>
            <NavLink className="navlink" to={'contacts'}>Contacts page</NavLink>
        </header>
    )
};

export default Header;