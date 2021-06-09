export default class MainApi {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }
    setToken() {
        this._headers = {
            'authorization': localStorage.getItem('token'),
            'Accept': 'text/html, application/json',
            'Content-Type': 'application/json'
        }
    }
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include'
        })
            .then(res => this._getResponseData(res))
    }
    updateUserInfo(usrInfo) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(
                usrInfo
            )
        })
            .then(res => this._getResponseData(res))
    }
    getMoviesFromSavedList() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include'
        })
            .then(res => this._getResponseData(res))
    }

    addToSavedMovies(movieInfo) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(
                movieInfo
            )
        })
            .then(res => this._getResponseData(res))
    }

    delSavedMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._getResponseData(res))
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
}