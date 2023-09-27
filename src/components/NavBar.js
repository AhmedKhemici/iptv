import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import Button from './UI/Button';

const NavBar = () => {
  const nav = 
    <ul>
      <li>
        <NavLink
          to="/Pricing"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
        >
          PRICING
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/FAQ"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
        >
          CONTACT US
        </NavLink>  
      </li>          
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
        >
          CONTACT US
        </NavLink>
      </li>
    </ul>
  
  return (
      <nav className={classes['nav-bar']}>
        <div className={classes['menu-mobile']}>
            {nav}
        </div>
        <div className={classes.container}>
          <div className="logo">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} className={classes.logo} alt='Logo'/>
            </NavLink>
          </div>
          <div className={classes['menu']}>
            {nav}
            <Button className={classes.button}>Free Trail</Button>
          </div>
          <button className={classes['menu-button']}>-</button>
        </div>
      </nav>
  );
}

export default NavBar;