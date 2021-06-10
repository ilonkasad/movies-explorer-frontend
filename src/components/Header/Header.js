import React from 'react';
import logoIcon from '../../images/logo.svg';
import accIcon from '../../images/account.svg';
import menuIcon from '../../images/logo-menu.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ mainStatus, onMenuForm, onLogoClick, isBoldMovie, isSavedMovies, onRegisterClick, onLoginClick, handleProfile, loggedIn }) => {
    let headerBlockClassName, logoClassName, moviesBlockClassName, regBlockClassName, accBlockClassName, menuBtnClassName;
    switch (mainStatus) {
        case 'Main':
            headerBlockClassName = 'header header_main';
            logoClassName = 'header__logo';
            moviesBlockClassName = loggedIn ? 'header__movies' : 'header__hide';
            regBlockClassName = loggedIn ? 'header__hide' : 'header__login';
            accBlockClassName = loggedIn ? 'header__account' : 'header__hide';
            menuBtnClassName = loggedIn ? 'header__btn-menu' : 'header__hide';
            break;
        case 'Movies':
            headerBlockClassName = 'header';
            logoClassName = 'header__logo';
            moviesBlockClassName = 'header__movies';
            regBlockClassName = 'header__hide';
            accBlockClassName = 'header__account';
            menuBtnClassName = 'header__btn-menu';
            break;
        case 'Reg':
            headerBlockClassName = 'header header_reg';
            logoClassName = 'header__logo header__logo_reg';
            moviesBlockClassName = 'header__hide';
            regBlockClassName = 'header__hide';
            accBlockClassName = 'header__hide';
            menuBtnClassName = 'header__hide';
            break;
        default:
            headerBlockClassName = 'header';
            logoClassName = 'header__logo';
            moviesBlockClassName = 'header__movies';
            regBlockClassName = 'header__hide';
            accBlockClassName = 'header__hide';
            menuBtnClassName = 'header__hide';
            break;
    }

    return (
        <header className={headerBlockClassName}>
            <button className={logoClassName} onClick={onLogoClick}>
                <img src={logoIcon} alt="Логотип" />
            </button>
            <div className={moviesBlockClassName}>
                <NavLink to="/movies" className={isBoldMovie && !isSavedMovies ? `header__movie_bold` : `header__movie`}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={isBoldMovie && isSavedMovies ? `header__movie_bold` : `header__movie`}>Сохранённые фильмы</NavLink>
            </div>
            <div className={regBlockClassName}>
                <button className="header__btn-reg" onClick={onRegisterClick}>Регистрация</button>
                <button className="header__btn-signin" onClick={onLoginClick}>Войти</button>
            </div>
            <div className={accBlockClassName}>
                <p>Аккаунт</p>
                <button className="header__btn-acc" onClick={handleProfile} type="button">
                    <img src={accIcon} alt="Закрыть" />
                </button>
            </div>
            <button className={menuBtnClassName} type="button" onClick={onMenuForm}>
                <img src={menuIcon} alt="Меню" />
            </button>





        </header>
    );
}
export default Header;