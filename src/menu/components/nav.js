import { Link, Route, Routes } from 'react-router-dom';
import navLinks from "./navLinks";

const Nav = () => {
    return (
        <nav>
            {navLinks.map((nav) => (
                <Link to={nav.link} key={nav.title}>
                {nav.title}
                </Link>
                
            ))}
            <Routes>
            {
                navLinks.map((nav) => (
                    <Route path={nav.link} element={nav.ruth}></Route>
                ))
            }
            </Routes>
        </nav>
    );
};

export default Nav;