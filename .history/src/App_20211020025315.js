import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Covid from './Pages/Covid/Covid';
import { useEffect, useState } from 'react';
import Career from './Pages/Careers/Careers/Careers';
import axios from 'axios';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {


  const [careers, setCareers] = useState({});
  const [covid, setCovid] = useState({});


  return (
    <div id="app" className="container w-100 mx-auto">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/career">
              <Career></Career>
            </Route>
            <Route path="/covid">
              <Covid></Covid>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
