import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrNotFound from '../ErrNotFound/ErrrNotFound';

function App() {
    const history = useHistory();
    const [isMenuOpen, setShowMenuOpen] = React.useState(false);
    function handleShowMenu() {
        setShowMenuOpen(true);
    }
    function handleLogo() {
        history.push('/');
    }
    function handleLogin() {
        history.push('/signin');
    }
    function handleRegister() {
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
            <Switch>
                <Route path="/saved-movies">
                    <SavedMovies isMenuOpen={isMenuOpen} onMenuForm={handleShowMenu} onLogoClick={handleLogo} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
                </Route>
                <Route path="/movies">
                    <Movies isMenuOpen={isMenuOpen} onMenuForm={handleShowMenu} onLogoClick={handleLogo} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
                </Route>
                <Route path="/profile">
                    <Profile isMenuOpen={isMenuOpen} onMenuForm={handleShowMenu} onLogoClick={handleLogo} handleProfile={handleProfile} handleMenuClose={handleMenuClose} />
                </Route>
                <Route path="/signup">
                    <Register onLogoClick={handleLogo} />
                </Route>
                <Route path="/signin">
                    <Login onLogoClick={handleLogo} />
                </Route>
                <Route exact path="/">
                    <Main onLogoClick={handleLogo} handleRegister={handleRegister} handleLogin={handleLogin} />
                </Route>
                <Route path="/">
                    <ErrNotFound />
                </Route>


            </Switch>
        </div>

    )
}
export default App;