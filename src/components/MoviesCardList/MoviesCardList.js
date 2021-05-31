import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import srcTest1 from '../../images/pic/pic1.jpg';
import srcTest2 from '../../images/pic/pic2.jpg';
import srcTest3 from '../../images/pic/pic3.jpg';
import srcTest4 from '../../images/pic/pic4.jpg';
import srcTest5 from '../../images/pic/pic5.jpg';
import srcTest6 from '../../images/pic/pic6.jpg';
import srcTest7 from '../../images/pic/pic7.jpg';

const MoviesCardList = (props) => {
    const movieDuration = '1ч 42м';

    const moviesBtnClassName = (
        `moviesCardList__btn ${!props.isSavedList ? '' : 'moviesCardList__btn_hide'}`
    );

    return (
        <div className="moviesCardList">
            <div className={!props.isSavedList ? 'moviesCardList__data' : 'moviesCardList__data_hide'}>
                <MoviesCard save='saved' name='33 слова о дизайне' duration={movieDuration} srcImg={srcTest1} />
                <MoviesCard save='saved' name='Киноальманах «100 лет дизайна»' duration={movieDuration} srcImg={srcTest2} />
                <MoviesCard save='unsaved' name='В погоне за Бенкси' duration={movieDuration} srcImg={srcTest3} />
                <MoviesCard save='unsaved' name='Баския: Взрыв реальности' duration={movieDuration} srcImg={srcTest4} />
                <MoviesCard save='saved' name='Бег это свобода' duration={movieDuration} srcImg={srcTest5} />
                <MoviesCard save='unsaved' name='Книготорговцы' duration={movieDuration} srcImg={srcTest6} />
                <MoviesCard save='unsaved' name='Когда я думаю о Германии ночью' duration={movieDuration} srcImg={srcTest7} />
            </div>
            <div className={props.isSavedList ? 'moviesCardList__data' : 'moviesCardList__data_hide'}>
                <MoviesCard save='del' name='33 слова о дизайне' duration={movieDuration} srcImg={srcTest1} />
                <MoviesCard save='del' name='Киноальманах «100 лет дизайна»' duration={movieDuration} srcImg={srcTest2} />
                <MoviesCard save='del' name='В погоне за Бенкси' duration={movieDuration} srcImg={srcTest3} />
            </div>
            <div>
                <button className={moviesBtnClassName}>Ещё</button>
            </div>
        </div>

    );
}
export default MoviesCardList;