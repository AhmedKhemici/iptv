import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import Container from './UI/Container';
import Button from './UI/Button';

const NavBar = () => {
  return (
      <nav className={classes['nav-bar']}>
        <Container className={classes.container}>
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
          <Button className={classes.button}>Free Trail</Button>
        </Container>
      </nav>
  );
}

export default NavBar;