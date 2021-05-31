import React from 'react';
const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className="footer__line" />
            <div className="footer__info-block">
                <p className="footer__year">&copy; 2021</p>
                <div className="footer__link-block">
                    <a className="footer__link" href=" ">Яндекс.Практикум</a>
                    <a className="footer__link" href=" ">Github</a>
                    <a className="footer__link" href=" ">Facebook</a>
                </div>
            </div>

        </div>
    );
}
export default Footer;