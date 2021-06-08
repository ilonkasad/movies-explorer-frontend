
import React from 'react';
import Header from '../Header/Header';
import { useFormWithValidation } from '../Validation/Validation';

const Register = ({ onLogoClick, handleRegister }) => {
    const n = 3; //count of valid fields
    const validation = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(validation.values.name, validation.values.email, validation.values.password);
    }
    return (
        <form onSubmit={handleSubmit} className="register">
            <div className="register__info">
                <Header mainStatus="Reg" onLogoClick={onLogoClick} />
                <p className="register__greeting">Добро пожаловать!</p>

                <p className="register__label">Имя</p>
                <input name="name" className="register__input" onChange={validation.handleChange} value={validation.values.name}></input>
                <p className={validation.errors.name === 'valid' ? 'register__err_hide' : 'register__err'}>Некорректное имя</p>

                <p className="register__label">E-mail</p>
                <input name="email" className="register__input" onChange={validation.handleChange} value={validation.values.email}></input>
                <p className={validation.errors.email === 'valid' ? 'register__err_hide' : 'register__err'}>Некорректный e-mail</p>

                <p className="register__label">Пароль</p>
                <input name="password" type="password" className="register__input" onChange={validation.handleChange} value={validation.values.password}></input>
                <p className={validation.errors.password === 'valid' ? 'register__err_hide' : 'register__err'}>Ненадежный пароль</p>

                <button disabled={!validation.checkValidForm(n)} className={validation.checkValidForm(n) ? 'register__btn' : 'register__btn register__btn_disable'}>Зарегистрироваться</button>
                <p className="register__assumption">Уже зарегистрированы?    <a className="register__assumption-link" href="/signin">Войти</a></p>
            </div>
        </form>
    )
}
export default Register;