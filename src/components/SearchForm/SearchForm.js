import React from 'react';
import searchIcon from '../../images/search.svg';

const SearchForm = ({ mainStatus }) => {

    return (
        <div className="searchform">
            <div className="searchform__input-block">
                <input type="text" className="searchform__input" placeholder="Фильм" required></input>
                <button className="searchform__button">
                    <img src={searchIcon} alt="Поиск" />
                </button>
            </div>
            <div className="searchform__input-block">
                <input type="checkbox" id="toggle-button" className="searchform__toggle-button" />
                <label htmlFor="toggle-button" className="searchform__toggle-button-text">Короткометражки</label>
            </div>
            <hr className="searchform__line" />

        </div>
    );
}
export default SearchForm;