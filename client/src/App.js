import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import './App.css';

const App = () => {
  return (

    <AuthState>

      <ContactState>

        <Router>

          <Fragment>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path='/' element={(
                  <Fragment>
                    <Home />
                  </Fragment>
                )} />
                <Route exact path='/about' element={(
                  <Fragment>
                    <About />
                  </Fragment>
                )} />
                <Route exact path='/register' element={(
                  <Fragment>
                    <Register />
                  </Fragment>
                )} />
                <Route exact path='/login' element={(
                  <Fragment>
                    <Login />
                  </Fragment>
                )} />
              </Routes>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>



  );
}

export default App;
