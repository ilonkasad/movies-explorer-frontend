import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const SavedMovies = ({ isMenuOpen, onMenuForm, onLogoClick, handleProfile, handleMenuClose }) => {
    return (
        <div>
            <Header mainStatus="Movies" onMenuForm={onMenuForm} onLogoClick={onLogoClick} isSavedMovies={true} handleProfile={handleProfile} />
            <SearchForm />
            <Preloader />
            <MoviesCardList isSavedList={true} />
            <Navigation isOpen={isMenuOpen} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
            <Footer />
        </div>
    )
}
export default SavedMovies;