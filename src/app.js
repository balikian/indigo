import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Nav from './components/Nav';
import 'normalize.css';
import './styles/styles.scss';

const App = () => (
    <div>
        <Header />
        <Hero />
        <Nav />
    </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
