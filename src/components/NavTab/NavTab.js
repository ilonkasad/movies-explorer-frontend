/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-scroll'
//const ScrollLink = Scroll.ScrollLink();
const NavTab = () => {
    return (
        <ul className="navtab">
            <li><Link className="navtab__link" to="aboutproject" spy={true} smooth={true}>О проекте</Link></li>
            <li><Link className="navtab__link" to="techs" spy={true} smooth={true}>Технологии</Link></li>
            <li><Link className="navtab__link" to="aboutme" spy={true} smooth={true}>Студент</Link></li>
        </ul>
    );
}
export default NavTab;