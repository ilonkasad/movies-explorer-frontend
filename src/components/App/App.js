import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import { filterMovie, filterByToggle } from '../../utils/utils';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrNotFound from '../ErrNotFound/ErrrNotFound';
import * as auth from '../../middlewares/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export const moviesApi = new MoviesApi(
    {
        url: auth.MOVIES_URL,
        headers: {
            'Accept': 'text/html, application/json',
            'Content-Type': 'application/json'
        }
    }
);
export const mainApi = new MainApi(
    {
        url: auth.BASE_URL,
        headers: {
            'authorization': localStorage.getItem('token'),
            'Accept': 'text/html, application/json',
            'Content-Type': 'application/json'
        }
    }
);
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setUser] = useState({
        name: '',
        email: ''
    });
    const history = useHistory();
    const [isMenuOpen, setShowMenuOpen] = React.useState(false);
    const [allMovies, setAllMovies] = React.useState([]);
    const [filterMovies, setFilterMovies] = React.useState([]);
    const [currentPartMovies, setPartMovies] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [moviesForFilter, setMoviesForFilter] = React.useState([]);
    const [isPreloaderActive, setPreloaderActive] = React.useState(false);
    const [isMoviesBlockActive, setMoviesActive] = React.useState(false);
    const [isValidSearch, setisValidSearch] = React.useState(false);
    const [isShowMore, setIsShowMore] = React.useState(true);
    const [isToggle, setToggle] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(true);
    const [isChangedSuccess, setIsChangedSuccess] = React.useState(false);
    const [resultMessage, setResultMessage] = React.useState('');
    const getWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    let width = useCurrentWidth();
    const [counter, setCounter] = React.useState(0);

    const getAllMovies = React.useCallback(() => {
        moviesApi.getMoviesFromService().then(data => {
            setAllMovies(data);
            setFilterMovies(data);
        })
            .catch((err) => {
                setResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                console.log(err);
            })
    }, [])

    useEffect(() => {
        if (allMovies.length === 0) {
            getAllMovies();
        }
    }, [allMovies, getAllMovies])

    const handleSearchMovieClick = (inputValue, counter, isToggle) => {
        if (inputValue === '') {
            setisValidSearch(true);
            setMoviesActive(false);
            setPartMovies([]);
        }
        else {
            setisValidSearch(false);
            setPreloaderActive(true);
            setCounter(counter);
            let filterData = filterMovie(allMovies, inputValue);
            setCounter(defineCountParts(counter));
            setFilterMovies(filterData);
            if (isToggle) {
                filterData = filterByToggle(filterData);
            }
            setPartMovies(filterData);
            setMoviesActive(true);
            setPreloaderActive(false);
        }
    }

    const handleToggle = (isToggle, isSaved) => {
        setToggle(isToggle);
        getToggleFilter(isToggle, filterMovies, isSaved);
    }

    const getToggleFilter = (isToggle, filterMovies, isSaved) => {
        if (isToggle) {
            if (!isSaved) {
                let filterData = filterByToggle(filterMovies);
                setPartMovies(filterData);
            }
            else {
                let filterData = filterByToggle(savedMovies);
                setSavedMovies(filterData);
            };
        }
        else {
            if (!isSaved) {
                setPartMovies(filterMovies)
            }
            else { setSavedMovies(moviesForFilter); }
        }
    }

    const getSavedMovies = React.useCallback(() => {
        mainApi.getMoviesFromSavedList().then(data => {
            setSavedMovies(data);
            setMoviesForFilter(data);
        })
            .catch((err) => {
                setResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                console.log(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSearchSavedMovieClick = (inputValue, isToggle) => {
        if (inputValue === '') {
            setSavedMovies(moviesForFilter);
            if (isToggle) {
                getToggleFilter(isToggle, savedMovies, false);
            }
        }
        else {
            let filterData = filterMovie(moviesForFilter, inputValue);
            if (isToggle) {
                filterData = filterByToggle(filterData);
            }
            setSavedMovies(filterData);
        }
    }

    function useCurrentWidth() {
        const [curWidth, setWidth] = React.useState(getWidth());
        useEffect(() => {
            let timeoutId = null;
            const resizeListener = () => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => setWidth(getWidth()), 150);
                width = getWidth();
                setCounter(0);
                getAllMovies(counter);
            };
            window.addEventListener('resize', resizeListener);
            return () => {
                window.removeEventListener('resize', resizeListener);
            }
        }, [])

        return curWidth;
    }

    function defineCountParts(counter) {
        const windowSize = width;
        if (windowSize >= 1280) {
            return 4 + counter;
        }
        else if (windowSize >= 768) {
            return 4 + counter;
        }
        else if (windowSize >= 320) {
            return 5 + counter;
        }
    }

    function handleMoreClick(curCounter) {
        setCounter(curCounter);
        if (defineCountParts(curCounter) >= (currentPartMovies.length)) {
            setIsShowMore(false);
        }
        else {
            setIsShowMore(true);
            setPartMovies(filterMovies);
        }
    }

    const handleLogin = (email, password) => {
        auth.authorize(email, password)
            .then((data) => {
                if (data.token) {
                    setLoggedIn(true);
                    localStorage.setItem('token', data.token);
                    mainApi.setToken();
                    localStorage.setItem('loggedIn', true);
                    setIsLogin(true);
                    setUser({
                        ...currentUser
                    })
                    history.push('/movies');
                } else {
                    setIsLogin(false);
                    if (data.message === "[object Object]") {
                        setLoggedIn(false);
                        localStorage.removeItem('loggedIn', loggedIn);
                        throw new Error("Некорректный email или пароль");
                    }
                }
            })
            .catch((err) => {
                console.error(err.message);
            });
    }


    const handleRegister = (name, email, password) => {
        auth.register(name, email, password)
            .then((res) => {
                if (res.error === 'Пользователь с таким email уже зарегистрирован') {
                    throw new Error(res.error);
                }
                history.push('/signin')
            })
            .catch((e) => {
                console.error(e.message);
            });
    }

    const handleSignOut = () => {
        setLoggedIn(false);
        localStorage.clear();
        setUser({
            ...currentUser,
            name: '',
            email: '',
        })
        history.push('/');
    }
    const handleEditProfile = (obj) => {
        mainApi.updateUserInfo(obj)
            .then(res => {
                setUser(res.data);
                setIsChangedSuccess(true);
            })
            .catch((err) => {
                console.log(err);
                setIsChangedSuccess(false);
            })
    }

    function handleMovieLike(movie, save) {
        const movieId = movie.id != null ? movie.id : movie.movieId;
        if (save === false) {
            mainApi.addToSavedMovies({
                country: movie.country, director: movie.director, duration: movie.duration,
                year: movie.year, description: movie.description, image: `${auth.SERVER_URL}${movie.image.url}`,
                trailer: movie.trailerLink, thumbnail: `${auth.SERVER_URL}${movie.image.formats.thumbnail.url}`,
                movieId: movie.id, nameRU: movie.nameRU, nameEN: movie.nameEN
            })
                .then((newMovie) => {
                    setSavedMovies([newMovie.data, ...savedMovies]);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            mainApi.delSavedMovie(movieId).then(() => {
                getSavedMovies();
            })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    const tokenCheck = React.useCallback(() => {
        const token = localStorage.getItem('token');
        if (token) {
            auth.getContent(token)
                .then((res) => {
                    if (res) {
                        mainApi.setToken();
                        setLoggedIn(true);
                        localStorage.setItem('loggedIn', true);
                        setUser(userData => ({ ...userData, name: res.name, email: res.email }));

                    }
                    else {
                        if (res.message === "Токен не передан или передан не в том формате") {
                            localStorage.removeItem('token');
                            throw new Error(res.message);
                        }
                    }
                })
                .catch(e => {
                    setLoggedIn(false);
                    console.error(e)
                });
        } else {
            setLoggedIn(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn])

    useEffect(() => {
        tokenCheck();
    }, [tokenCheck])

    useEffect(() => {
        if (localStorage.getItem('token') !== null && loggedIn) {
            getSavedMovies();
        }
    }, [getSavedMovies, loggedIn])

    //получаем предыдущее состояние выбранных фильмов 
    React.useMemo(() => {
        let movies = [];
        if ((localStorage.getItem('allMovies') != null) && (localStorage.getItem('token') !== null)) {
            movies = JSON.parse(localStorage.getItem('allMovies'));
        }
        setPartMovies(movies);
        setCounter(defineCountParts(counter));
        setMoviesActive(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //обновляем состояние выбранных фильмов
    React.useMemo(() => {
        if (currentPartMovies.length > 0) {
            localStorage.setItem('allMovies', JSON.stringify(currentPartMovies));
        }

    }, [currentPartMovies]);

    //информация о пользователе
    React.useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            mainApi.setToken();
            mainApi.getUserInfo().then(data => {
                setUser(data);
            })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [loggedIn])

    function handleShowMenu() {
        setShowMenuOpen(true);
    }
    function handleLogo() {
        history.push('/');
    }
    function handleGoToLogin() {
        if (loggedIn) {
            history.push('/movies');
        }
        else {
            history.push('/signin');
        }
    }
    function handleGoToRegister() {
        history.push('/signup');
    }
    function handleProfile() {
        history.push('/profile');
    }
    function handleMenuClose() {
        setShowMenuOpen(false);
    }
    return (
        <div >
            <CurrentUserContext.Provider value={currentUser}>
                <Switch>
                    <Route exact path="/">
                        <Main onLogoClick={handleLogo} handleGoToRegister={handleGoToRegister} handleGoToLogin={handleGoToLogin} loggedIn={loggedIn} handleProfile={handleProfile} />
                    </Route>
                    <ProtectedRoute exact path="/movies" component={Movies}
                        movies={currentPartMovies} savedMovies={savedMovies} width={width} counter={counter} isMenuOpen={isMenuOpen} onMenuForm={handleShowMenu}
                        onLogoClick={handleLogo} handleProfile={handleProfile} handleMenuClose={handleMenuClose} onMoreClick={handleMoreClick}
                        onLikeClick={handleMovieLike} onSearchClick={handleSearchMovieClick} isPreloaderActive={isPreloaderActive} isMoviesBlockActive={isMoviesBlockActive}
                        isValidSearch={isValidSearch} isShowMore={isShowMore} onChangeToggle={handleToggle} isToggle={isToggle} resultMessage={resultMessage} loggedIn={loggedIn}>
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/saved-movies" component={SavedMovies}
                        movies={currentPartMovies} savedMovies={savedMovies} isMenuOpen={isMenuOpen} onMenuForm={handleShowMenu}
                        onLogoClick={handleLogo} handleProfile={handleProfile} handleMenuClose={handleMenuClose} isMoviesBlockActive={true}
                        onLikeClick={handleMovieLike} onSearchClick={handleSearchSavedMovieClick} isValidSearch={isValidSearch} onChangeToggle={handleToggle}
                        isToggle={isToggle} resultMessage={resultMessage} loggedIn={loggedIn}>
                    </ProtectedRoute>
                    <Route path="/signup">
                        <Register onLogoClick={handleLogo} handleRegister={handleRegister} />
                    </Route>
                    <Route path="/signin">
                        <Login onLogoClick={handleLogo} handleLogin={handleLogin} isLogin={isLogin} />
                    </Route>
                    <ProtectedRoute exact path="/profile" component={Profile}
                        isMenuOpen={isMenuOpen} onMenuForm={handleShowMenu} onLogoClick={handleLogo} handleProfile={handleProfile} handleMenuClose={handleMenuClose}
                        EditProfile={handleEditProfile} handleSignOut={handleSignOut} dataUser={currentUser} loggedIn={loggedIn} isChangedSuccess={isChangedSuccess}>
                    </ProtectedRoute>
                    <Route path="/">
                        <ErrNotFound />
                    </Route>
                </Switch>
            </CurrentUserContext.Provider>
        </div >
    )
}
export default App;