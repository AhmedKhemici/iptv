import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <div className={classes['contact-info']}>
      </div>
      <header className={classes['nav-bar']}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Accueil"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Offers"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Offers
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;