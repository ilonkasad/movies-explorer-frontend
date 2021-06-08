import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const SavedMovies = ({ movies, savedMovies, isMenuOpen, onMenuForm, onLogoClick, handleProfile, handleMenuClose,
    onLikeClick, isMoviesBlockActive, onSearchClick, isValidSearch, onChangeToggle, isToggle, resultMessage }) => {
    let msgClass;
    if (savedMovies.length === 0 && isMoviesBlockActive && resultMessage === '') {
        resultMessage = 'Ничего не найдено'
        msgClass = 'movies';
    }
    else {
        msgClass = 'movies movies_hide';
    }
    return (
        <div>
            <Header mainStatus="Movies" onMenuForm={onMenuForm} onLogoClick={onLogoClick} isSavedMovies={true} handleProfile={handleProfile} />
            <SearchForm onSearchClick={onSearchClick} isValid={isValidSearch} onChangeToggle={onChangeToggle} isToggle={isToggle} isSaved={true} />
            <Preloader />
            <div className={msgClass}>
                <p className="movies__result">{resultMessage}</p>
            </div>
            <MoviesCardList isSavedList={true} movies={movies} savedMovies={savedMovies} onLikeClick={onLikeClick} isMoviesBlockActive={true} />
            <Navigation isOpen={isMenuOpen} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
            <Footer />
        </div>
    )
}
export default SavedMovies;