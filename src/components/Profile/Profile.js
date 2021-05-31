import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Profile = ({ isMenuOpen, onMenuForm, onLogoClick, handleProfile, handleMenuClose }) => {
    return (
        <div className="profile">
            <Header mainStatus="Movies" onLogoClick={onLogoClick} onMenuForm={onMenuForm} />
            <div className="profile__info">
                <p className="profile__greeting">Привет, Виталий!</p>
                <div className="profile__elem">
                    <p>Имя</p>
                    <p>Виталий</p>
                </div>
                <hr className="profile__line" />
                <div className="profile__elem">
                    <p>E-mail</p>
                    <p>pochta@yandex.ru</p>
                </div>
                <button className="profile__btn">Редактировать</button>
                <button className="profile__btn profile__btn_out">Выйти из аккаунта</button>
            </div>
            <Navigation isOpen={isMenuOpen} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
        </div>
    )
}
export default Profile;