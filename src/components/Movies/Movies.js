import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Movies = ({ isMenuOpen, onMenuForm, onLogoClick, handleProfile, handleMenuClose }) => {
    return (
        <div>
            <Header mainStatus="Movies" onMenuForm={onMenuForm} onLogoClick={onLogoClick} isSavedMovies={false} handleProfile={handleProfile} />
            <SearchForm />
            <Preloader />
            <MoviesCardList isSavedList={false} />
            <Navigation isOpen={isMenuOpen} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
            <Footer />
        </div>
    )
}
export default Movies;