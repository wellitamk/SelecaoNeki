import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../Screens/Home";
import { Login } from "../Screens/Login";
import { Cadastro } from "../Screens/Cadastro";
import { Footer } from "../components/Footer"

export const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastro} />
      </Switch>
      <Footer />
    </Router>
  );
};
