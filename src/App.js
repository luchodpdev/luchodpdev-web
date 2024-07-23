import { Component } from 'react';
import NavBar from './components/NavBar';
import HeaderCards from './components/HeaderCards';
import SobreMi from './components/SobreMi';
import MainCards from './components/MainCards';
import MainCardsSoftware from './components/MainCardsSoftware';
import Footer from './components/Footer';
import './App.css';

const App = () => {

    return (
      <div>
        <header className='App-header'>

          <NavBar />
          <HeaderCards />

        </header>

        <main className='App-main'>

        <h3>sobre mi</h3>
        <SobreMi />
        <MainCards />
        <h3>conocimientos</h3>
        <MainCardsSoftware />

        </main>
        <footer className='class-footer'>
          <Footer />
        </footer>
      </div>
    )
  
}

export default App;
