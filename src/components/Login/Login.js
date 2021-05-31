
import React from 'react';
import Header from '../Header/Header';

const Login = ({ onLogoClick }) => {
    return (
        <div className="login">
            <div className="login__info">
                <Header mainStatus="Reg" onLogoClick={onLogoClick} />
                <p className="login__greeting">Рады видеть!</p>
                <p>E-mail</p>
                <input className="login__input"></input>
                <p>Пароль</p>
                <input type="password" className="login__input"></input>
                <button className="login__btn">Войти</button>
                <p className="login__assumption">Ещё не зарегистрированы?    <a className="login__assumption-link" href="/signup">Регистрация</a></p>
            </div>
        </div>
    )
}
export default Login;