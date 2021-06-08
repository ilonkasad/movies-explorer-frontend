import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
    // const movieDuration = '1ч 42м';
    let moviesBtnClassName = (
        `moviesCardList__btn ${!props.isSavedList ? '' : 'moviesCardList__btn_hide'}`
    );
    if (!props.isShowMore) {
        moviesBtnClassName = 'moviesCardList__btn moviesCardList__btn_hide';
    }
    let curPartMovies = props.movies.slice(0, props.counter);

    function handleMoreClick() {
        let curCounter = props.counter + 1;
        props.onMoreClick(curCounter);
    }
    return (

        <div className={props.isMoviesBlockActive ? 'moviesCardList' : 'moviesCardList moviesCardList__data_hide'}>
            <div className={!props.isSavedList ? 'moviesCardList__data' : 'moviesCardList__data_hide'}>
                {
                    curPartMovies.map((movie) =>
                    (<MoviesCard key={movie.id}
                        movie={movie}
                        save={(props.savedMovies.map((c) => c.movieId === movie.id ? true : false)).includes(true)}
                        onLikeClick={props.onLikeClick}
                    />
                    ))
                }
            </div>
            <div className={props.isSavedList ? 'moviesCardList__data' : 'moviesCardList__data_hide'}>
                {
                    props.savedMovies.map((movie) =>
                    (<MoviesCard key={movie._id}
                        movie={movie}
                        save={null}
                        onLikeClick={props.onLikeClick}
                    />
                    ))
                }
            </div>
            <div>
                <button className={moviesBtnClassName} onClick={handleMoreClick}>Ещё</button>
            </div>
        </div>

    );
}
export default MoviesCardList;