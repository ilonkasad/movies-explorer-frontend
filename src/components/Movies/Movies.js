import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Movies = ({ movies, savedMovies, width, counter, isMenuOpen, onMenuForm, onLogoClick, handleProfile,
    handleMenuClose, onMoreClick, onLikeClick, onSearchClick, isPreloaderActive, isMoviesBlockActive,
    isValidSearch, isShowMore, onChangeToggle, isToggle, resultMessage }) => {
    let msgClass;
    msgClass = 'movies movies_hide';
    if (movies != null) {
        if (movies.length === 0 && isMoviesBlockActive && resultMessage === '') {
            resultMessage = 'Ничего не найдено'
            msgClass = 'movies';
        }
    }
    return (
        <div>
            <div className="movies_hide">
                {`Current width -> ${width} Current counter -> ${counter}`}
            </div>
            <Header mainStatus="Movies" onMenuForm={onMenuForm} onLogoClick={onLogoClick} isSavedMovies={false} handleProfile={handleProfile} />
            <SearchForm onSearchClick={onSearchClick} isValid={isValidSearch} onChangeToggle={onChangeToggle} isToggle={isToggle} isSaved={false} />
            <Preloader isPreloaderActive={isPreloaderActive} />
            <div className={msgClass}>
                <p className="movies__result">{resultMessage}</p>
            </div>
            <MoviesCardList movies={movies} counter={counter} savedMovies={savedMovies} isSavedList={false} onMoreClick={onMoreClick}
                onLikeClick={onLikeClick} isMoviesBlockActive={isMoviesBlockActive} isShowMore={isShowMore} />
            <Navigation isOpen={isMenuOpen} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
            <Footer />
        </div>
    )
}
export default Movies;