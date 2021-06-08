import React from 'react';
import * as auth from '../../middlewares/auth';

const MoviesCard = ({ movie, save, onLikeClick }) => {
    let cardLikeButtonClassName;
    let imgUrl = '';
    if (movie.image != null) {
        imgUrl = movie.image.url != null ? `${auth.SERVER_URL}${movie.image.url}` : movie.image;
    }


    function likeBtnClick() {
        onLikeClick(movie, save);
    }

    if (save === true) {
        cardLikeButtonClassName = "moviesCard__saved"
    }
    else {
        cardLikeButtonClassName = (
            `moviesCard__saved ${save === false ? 'moviesCard__saved_unactive' : 'moviesCard__saved_del'}`
        );
    }

    return (
        <div className="moviesCard">
            <div className="moviesCard__info">
                <div>
                    <p className="moviesCard__name">{movie.nameRU}</p>
                    <p className="moviesCard__duration">{`${Math.floor(movie.duration / 60)} ч ${movie.duration % 60} мин`}</p>
                </div>
                <button className={cardLikeButtonClassName} onClick={likeBtnClick}></button>
            </div>
            <a href={movie.trailer}><img className="moviesCard__img" src={imgUrl} alt="Постер к фильму"></img></a>
        </div>
    );
}
export default MoviesCard;