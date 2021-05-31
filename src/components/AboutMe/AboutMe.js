import React from 'react';
import photo from '../../images/photo.jpg';
const AboutMe = () => {
    return (
        <div className="aboutme">
            <p className="aboutme__title">Студент</p>
            <div className="aboutme__info">
                <div className="aboutme__text-info">
                    <p className="aboutme__name">Виталий</p>
                    <p className="aboutme__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutme__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="aboutme__sn-info">
                        <p className="aboutme__sn">Facebook</p>
                        <p className="aboutme__sn">Github</p>
                    </div>
                </div>
                <img className="aboutme__photo" src={photo} alt="Фото профиля" />
            </div>
        </div>
    );
}
export default AboutMe;