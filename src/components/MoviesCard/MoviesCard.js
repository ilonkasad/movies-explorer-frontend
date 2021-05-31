import React from 'react';

const MoviesCard = (props) => {
    let cardLikeButtonClassName;
    if (props.save === 'saved') {
        cardLikeButtonClassName = "moviesCard__saved"
    }
    else {
        cardLikeButtonClassName = (
            `moviesCard__saved ${props.save === 'unsaved' ? 'moviesCard__saved_unactive' : 'moviesCard__saved_del'}`
        );
    }
    return (
        <div className="moviesCard">
            <div className="moviesCard__info">
                <div>
                    <p className="moviesCard__name">{props.name}</p>
                    <p className="moviesCard__duration">{props.duration}</p>
                </div>
                <button className={cardLikeButtonClassName}></button>
            </div>
            <img className="moviesCard__img" src={props.srcImg} alt="Постер к фильму"></img>
        </div>
    );
}
export default MoviesCard;