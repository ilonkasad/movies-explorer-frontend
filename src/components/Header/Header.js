import React from 'react';
import logoIcon from '../../images/logo.svg';
import accIcon from '../../images/account.svg';
import menuIcon from '../../images/logo-menu.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ mainStatus, onMenuForm, onLogoClick, isSavedMovies, handleRegister, handleLogin, handleProfile }) => {
    let headerBlockClassName, logoClassName, moviesBlockClassName, regBlockClassName, accBlockClassName, menuBtnClassName;
    switch (mainStatus) {
        case 'Main':
            headerBlockClassName = 'header header_main';
            logoClassName = 'header__logo';
            moviesBlockClassName = 'header__hide';
            regBlockClassName = 'header__login';
            accBlockClassName = 'header__hide';
            menuBtnClassName = 'header__hide';
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
                <NavLink to="/movies" className={isSavedMovies ? `header__movie` : `header__movie_bold`}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={!isSavedMovies ? `header__movie` : `header__movie_bold`}>Сохранённые фильмы</NavLink>
            </div>
            <div className={regBlockClassName}>
                <button className="header__btn-reg" onClick={handleRegister}>Регистрация</button>
                <button className="header__btn-signin" onClick={handleLogin}>Войти</button>
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