import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CumFunctioneaza from "./setup/components/CumFunctioneaza";
import Home from "./setup/components/Home";
import InformatiiUtile from "./setup/components/InformatiiUtile";
import InscriereFirma from "./setup/components/InscriereFirma";
import Error from "./setup/components/Error";
import ParerileClientilor from "./setup/components/ParerileClientilor";
import CautaFirma from "./setup/components/CautaFirma";
import About from "./setup/components/DespreNoi";
import NavbarBootstrap from "./setup/components/Ui/NavbarBootstrap";
import Localizare from "./setup/components/Localizare";
import Test from "./setup/components/Test";
import Contact from "./setup/components/Contact";
import Footer from "./setup/components/Ui/Footer";
import './setup/styles/App.css';
// import {Navbar} from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import DespreNoi from "./setup/components/DespreNoi";


function App() {
  return (
      <Router>
        <NavbarBootstrap />
        <Switch>
          <Route path="/Home" exact component={Home}>{Home}</Route>
          <Route path="/About" component={About}>{About}</Route>
          <Route path="/CumFunctioneaza" component={CumFunctioneaza}>{CumFunctioneaza}</Route>
          <Route path="/Localizare" component={Localizare}>{Localizare}</Route>
          <Route path="/CautaFirma" component={CautaFirma}>{CautaFirma}</Route>
          <Route path="/ParerileClientilor" component={ParerileClientilor}>{ParerileClientilor}</Route>
          <Route path="/DespreNoi" component={DespreNoi}>{DespreNoi}</Route>
          <Route path="/InformatiiUtile" component={InformatiiUtile}>{InformatiiUtile}</Route>
          <Route path="/InscriereFirma" component={InscriereFirma}>{InscriereFirma}</Route>
          <Route path="/Contact" component={Contact}>{Contact}</Route>
          <Route path="/Test" component={Test}>{Test}</Route>
          <Route path="*" component={Error}>{Error}</Route>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
