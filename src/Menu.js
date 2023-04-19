import {NavLink} from 'react-router-dom';

function Menu() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
          <NavLink to="/signup">Sign-Up</NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  export default Menu;