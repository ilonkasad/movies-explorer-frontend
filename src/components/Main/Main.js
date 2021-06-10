import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
//import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Main = ({ onLogoClick, handleGoToRegister, handleGoToLogin, loggedIn, handleProfile }) => {
    //const currentUser = React.useContext(CurrentUserContext);
    return (
        <div>
            <Header mainStatus="Main" onLogoClick={onLogoClick} onRegisterClick={handleGoToRegister} onLoginClick={handleGoToLogin} loggedIn={loggedIn}
                handleProfile={handleProfile} isBoldMovie={false} isSavedMovies={false} />
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