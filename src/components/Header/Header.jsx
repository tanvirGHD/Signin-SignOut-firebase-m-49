import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div style={{ marginRight: '20px' }}>
            <NavLink 
                to="/" 
                style={({ isActive }) => ({ backgroundColor: isActive ? 'aqua' : 'transparent', marginRight: '20px' })}
            >
                Home
            </NavLink>
            <NavLink 
                to="/login" 
                style={({ isActive }) => ({ backgroundColor: isActive ? 'aqua' : '' })}
            >
                Login
            </NavLink>
        </div>
    );
};

export default Header;
