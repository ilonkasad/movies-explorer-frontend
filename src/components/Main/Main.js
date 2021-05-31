import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const Main = ({ onLogoClick, handleRegister, handleLogin }) => {
    return (
        <div>
            <Header mainStatus="Main" onLogoClick={onLogoClick} handleRegister={handleRegister} handleLogin={handleLogin} />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    )
}
export default Main;