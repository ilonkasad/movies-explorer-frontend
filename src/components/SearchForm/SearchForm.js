import React from 'react';
import searchIcon from '../../images/search.svg';

const SearchForm = ({ onSearchClick, isValid, onChangeToggle, isToggle, isSaved }) => {
    const [searchValue, setSearchValue] = React.useState('');

    function handleChangeSearchValue(e) {
        setSearchValue(e.target.value);
    }

    function searchClick() {
        !isSaved ? onSearchClick(searchValue, 0, isToggle) : onSearchClick(searchValue, isToggle);
    }

    function handleChangeToggle() {
        isToggle = !isToggle;
        onChangeToggle(isToggle, isSaved);
    }

    return (
        <div className="searchform">
            <div className="searchform__input-block">
                <input type="text" className="searchform__input" placeholder="Фильм" required value={searchValue} onChange={handleChangeSearchValue}></input>
                <button className="searchform__button" onClick={searchClick}>
                    <img src={searchIcon} alt="Поиск" />
                </button>
            </div>
            <p className={!isValid ? 'searchform__msg' : 'searchform__msg searchform__msg_active'}>Нужно ввести ключевое слово</p>
            <div className="searchform__input-block">
                <input type="checkbox" id="toggle-button" className="searchform__toggle-button" onChange={handleChangeToggle} />
                <label htmlFor="toggle-button" className="searchform__toggle-button-text">Короткометражки</label>
            </div>
            <hr className="searchform__line" />

        </div>
    );
}
export default SearchForm;