import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import Button from './UI/Button';

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <div className={classes['contact-info']}>
        <img src='' alt='X'/>
        <img src='' alt='Facebook'/>
        <img src='' alt='Instagram'/>
        <div className=''>
          <img  src='' alt='Phone'/>
          <span>SERVICE CLIENT:</span>
          <span>+213665824855</span>
        </div>
      </div>
      <header className={classes['nav-bar']}>
      <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} className={classes.logo} alt='Logo'/>
        </NavLink>
        <nav>
          <ul>
            <li>
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
              <Button className={classes.button}>Espace Client</Button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;