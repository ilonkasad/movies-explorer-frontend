import React from 'react'
import './Preloader.css'

const Preloader = ({ isPreloaderActive }) => {
    return (
        <div className={!isPreloaderActive ? 'preloader' : 'preloader preloader_active'}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
