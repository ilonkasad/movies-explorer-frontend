export function filterMovie(data, inputValue) {
    let dataResult = [];

    dataResult = data.filter(function (movie) {
        const name = (movie.nameRU === null ? '' : movie.nameRU) + (movie.nameEN === null ? '' : movie.nameEN);
        if (name.toLowerCase().includes(inputValue.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    }
    )
    return dataResult;
};
export function filterByToggle(data) {
    let dataResult = [];
    dataResult = data.filter(function (movie) {
        return movie.duration <= 40;
    })
    return dataResult;
}

export default filterMovie;