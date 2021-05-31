import React from 'react';
import { NavLink } from 'react-router-dom';
import accIcon from '../../images/account.svg';
import closeMenu from '../../images/close-menu.svg';

const Navigation = ({ isOpen, handleProfile, handleMenuClose }) => {
    return (
        <div className={isOpen ? `navigation navigation_active` : `navigation`}>
            <div className="navigation__container">
                <button className="navigation__btn-close" onClick={handleMenuClose} type="button">
                    <img className="navigation__btn-close-img" src={closeMenu} alt="Закрыть" />
                </button>
                <div className="navigation__links">
                    <NavLink className="navigation__link" to="/">Главная</NavLink>
                    <NavLink className="navigation__link" to="/movies">Фильмы</NavLink>
                    <NavLink className="navigation__link" to="/saved-movies">Сохраненные фильмы</NavLink>
                </div>
                <div className='navigation__account'>
                    <p>Аккаунт</p>
                    <button className="navigation__btn-acc" onClick={handleProfile} type="button">
                        <img src={accIcon} alt="Закрыть" />
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Navigation;