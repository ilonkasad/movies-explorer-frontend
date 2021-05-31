
import React from 'react';
import Header from '../Header/Header';

const Register = ({ onLogoClick, handleRegister }) => {
    return (
        <div className="register">
            <div className="register__info">
                <Header mainStatus="Reg" onLogoClick={onLogoClick} handleRegister={handleRegister} />
                <p className="register__greeting">Добро пожаловать!</p>
                <p>Имя</p>
                <input className="register__input"></input>
                <p>E-mail</p>
                <input className="register__input"></input>
                <p>Пароль</p>
                <input type="password" className="register__input"></input>
                <p className="register__err">Что-то пошло не так</p>
                <button className="register__btn">Зарегистрироваться</button>
                <p className="register__assumption">Уже зарегистрированы?    <a className="register__assumption-link" href="/signin">Войти</a></p>
            </div>
        </div>
    )
}
export default Register;