
import React from 'react';
import Header from '../Header/Header';
import { useFormWithValidation } from '../Validation/Validation';

const Login = ({ onLogoClick, handleLogin, isLogin }) => {
    const n = 2; //count of valid fields
    const validation = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(validation.values.email, validation.values.password);
    }
    return (
        <form onSubmit={handleSubmit} className="login">
            <div className="login__info">
                <Header mainStatus="Reg" onLogoClick={onLogoClick} />
                <p className="login__greeting">Рады видеть!</p>

                <p className="login__label">E-mail</p>
                <input name="email" className="login__input" onChange={validation.handleChange} value={validation.values.email}></input>
                <p className={validation.errors.email === 'valid' ? 'login__err_hide' : 'login__err'}>Некорректный e-mail</p>

                <p className="login__label">Пароль</p>
                <input name="password" type="password" className="login__input" onChange={validation.handleChange} value={validation.values.password}></input>
                <p className={validation.errors.password === 'valid' ? 'login__err_hide' : 'login__err'}>Неверно указан пароль</p>

                <button disabled={!validation.checkValidForm(n)} className={validation.checkValidForm(n) ? 'login__btn' : 'login__btn login__btn_disable'}>Войти</button>
                <p className="login__assumption">Ещё не зарегистрированы?    <a className="login__assumption-link" href="/signup">Регистрация</a></p>
                <p className={isLogin ? "login__bad " : "login__bad login__bad_hide"}>Не удалось войти</p>
            </div>
        </form>
    )
}
export default Login;