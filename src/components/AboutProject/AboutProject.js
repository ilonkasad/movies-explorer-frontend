import React from 'react';
const AboutProject = () => {
    return (
        <div className="aboutproject">
            <p className="aboutproject__title">О проекте</p>
            <div className="aboutproject__content">
                <div className="aboutproject__content-detail">
                    <p className="aboutproject__content-detail-title">Дипломный проект включал 5 этапов</p>
                    <p className="aboutproject__content-detail-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutproject__content-detail">
                    <p className="aboutproject__content-detail-title">На выполнение диплома ушло 5 недель</p>
                    <p className="aboutproject__content-detail-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="aboutproject__content aboutproject__content_during" >
                <div className="aboutproject__content-detail aboutproject__content-detail_week-first">
                    <p className="aboutproject__content-detail-title aboutproject__content-detail-title_green">1 неделя</p>
                    <p className="aboutproject__content-detail-subtitle aboutproject__content-detail-subtitle_grey">Back-end</p>
                </div>
                <div className="aboutproject__content-detail aboutproject__content-detail_week-remain">
                    <p className="aboutproject__content-detail-title aboutproject__content-detail-title_grey">4 недели</p>
                    <p className="aboutproject__content-detail-subtitle aboutproject__content-detail-subtitle_grey">Front-end</p>
                </div>
            </div>
        </div>
    );
}
export default AboutProject;