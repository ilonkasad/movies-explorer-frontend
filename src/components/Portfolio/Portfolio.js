import React from 'react';
import linklogo from '../../images/link.svg';
const Portfolio = () => {
    return (
        <div className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <div className="portfolio__link-block"><a className="portfolio__link" href=" ">Статичный сайт</a><img className="portfolio__img" src={linklogo} alt="logo"></img></div>
            <hr className="portfolio__line" />
            <div className="portfolio__link-block"><a className="portfolio__link" href=" ">Адаптивный сайт</a><img className="portfolio__img" src={linklogo} alt="logo"></img></div>
            <hr className="portfolio__line" />
            <div className="portfolio__link-block"><a className="portfolio__link" href=" ">Одностраничное приложение</a><img className="portfolio__img" src={linklogo} alt="logo"></img></div>
            <hr className="portfolio__line" />
        </div>
    );
}
export default Portfolio;