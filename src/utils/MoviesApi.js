export default class MoviesApi {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }
    getMoviesFromService() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: this._headers
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
