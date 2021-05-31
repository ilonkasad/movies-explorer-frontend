import React from 'react';
const Techs = () => {
    return (
        <div className="techs">
            <p className="techs__title">Технологии</p>
            <p className="techs__heading">7 технологий</p>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__elements">
                <div className="techs__elem">HTML</div>
                <div className="techs__elem">CSS</div>
                <div className="techs__elem">JS</div>
                <div className="techs__elem">React</div>
                <div className="techs__elem">Git</div>
                <div className="techs__elem">Express.js</div>
                <div className="techs__elem">mongoDB</div>
            </div>
        </div>
    );
}
export default Techs;