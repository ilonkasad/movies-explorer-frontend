import React from 'react';
const ErrNotFound = () => {
    return (
        <div className="errNotFound">
            <p className="errNotFound__code">404</p>
            <p className="errNotFound__desc">Страница не найдена</p>
            <button className="errNotFound__btn">Назад</button>
        </div>
    );
}
export default ErrNotFound;