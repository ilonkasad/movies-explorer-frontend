import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { useFormWithValidation } from '../Validation/Validation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = ({ isMenuOpen, onMenuForm, onLogoClick, handleProfile, handleMenuClose, EditProfile, handleSignOut, dataUser, isChangedSuccess }) => {
    const currentUser = React.useContext(CurrentUserContext);
    const n = 2; //count of valid fields
    const validation = useFormWithValidation();
    const [isSmthChanged, setIsSmthChanged] = React.useState(false);
    const [isCorrect, setCorrect] = React.useState(false);

    React.useEffect(() => {
        validation.resetForm({ name: currentUser.name, email: currentUser.email }, { name: 'valid', email: 'valid' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    React.useEffect(() => {
        setIsSmthChanged(currentUser.name !== validation.values.name || currentUser.email !== validation.values.email);
    }, [currentUser.email, currentUser.name, validation.values.email, validation.values.name]);

    const handleClick = React.useCallback(
        () => {
            setCorrect(true);
        },
        [],
    );

    const handleEditProfile = (e) => {
        e.preventDefault();
        setCorrect(false);
        EditProfile({ name: validation.values.name, email: validation.values.email });
    }

    return (
        <form className="profile">
            <Header mainStatus="Movies" onLogoClick={onLogoClick} onMenuForm={onMenuForm} />
            <div className="profile__info">
                <p className="profile__greeting">Привет, {dataUser.name}!</p>

                <div className="profile__elem-block">
                    <p>Имя</p>
                    <input name="name" className="profile__elem" value={validation.values.name} onChange={validation.handleChange} onClick={handleClick}></input>
                </div>
                <p className={validation.errors.name === 'valid' ? 'profile__err_hide' : 'profile__err'}>Некорректное имя</p>
                <hr className="profile__line" />

                <div className="profile__elem-block">
                    <p>E-mail</p>
                    <input name="email" className="profile__elem" value={validation.values.email} onChange={validation.handleChange} onClick={handleClick}></input>
                </div>
                <p className={validation.errors.email === 'valid' ? 'profile__err_hide' : 'profile__err'}>Некорректный e-mail</p>

                <p className={isChangedSuccess && !isCorrect ? "profile__success profile__success_active" : "profile__success"}>Изменения сохранены</p>
                <button disabled={!validation.checkValidForm(n) && !isSmthChanged} className={validation.checkValidForm(n) && isSmthChanged ? 'profile__btn' : 'profile__btn profile__btn_disable'} onClick={handleEditProfile}>Редактировать</button>
                <button className="profile__btn profile__btn_out" onClick={handleSignOut}>Выйти из аккаунта</button>
            </div>
            <Navigation isOpen={isMenuOpen} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
        </form>
    )
}
export default Profile;