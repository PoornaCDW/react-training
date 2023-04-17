import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.styles.css'

/**
 * The Header function returns a JSX element representing a header with a logo and a menu containing
 * links to hotels, bike rentals, and restaurants.
 * @returns A functional component named `Header` is being returned. It contains a header element with
 * a logo and a menu with three NavLink components.
 */
const Header = () => {
    return (
        <>
            <header>
                <NavLink to='/'><img src={logo} alt='Logo' /></NavLink>
                <div className='menu'>
                    <NavLink to='#'><p>Hotels</p></NavLink>
                    <NavLink to='#'><p>Bike Rentals</p></NavLink>
                    <NavLink to='#'><p>Restaurants</p></NavLink>
                </div>
            </header>
        </>
    );
}

export default Header;