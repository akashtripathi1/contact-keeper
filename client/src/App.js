import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (

    <AuthState>

      <ContactState>
         <AlertState>
        <Router>

          <Fragment>
            <Navbar />
            <div className="container">
              <Alerts />
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
        </AlertState>
      </ContactState>
    </AuthState>



  );
}

export default App;
