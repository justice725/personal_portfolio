import { Link, Route, Routes } from 'react-router-dom';
import ThemeChange from '../../theme/components/themeChange';
import '../css/header.scss';
import navLinks from "./navLinks";

const Nav = () => {
    return (
        <>
        <nav className='globalNav pt_8'>
            <div className='gNWrap just_spacebetween'>
                <div>
                    {navLinks.map((nav) => (
                        <Link to={nav.link} key={nav.title} className='text2 in_fl transition_all items_center just_center nav_ani logoPadding' id={nav.title}>
                        {nav.title}
                        {nav.img}
                        </Link>
                    ))}
                </div>
                <div>
                    <ThemeChange />
                </div>
            </div>
        </nav>

        
        <Routes>
        {
            navLinks.map((nav) => (
                <Route path={nav.link} element={nav.ruth}></Route>
            ))
        }
        </Routes>
        </>
    );
};

export default Nav;