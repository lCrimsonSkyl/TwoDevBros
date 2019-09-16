import React from 'react';
import { hot } from 'react-hot-loader';
// Remover en produccion. Borrar tambien de babelrc
import Header from '../components/NavBar';
import Home from './Home';
import '../styles/global.scss';
import '../styles/global.css';

class App extends React.Component {
    state = {

    }

    render() {
        return (
            <>
                <Header />
                <Home />
            </>
        );
    }
}
export default hot(module)(App);
