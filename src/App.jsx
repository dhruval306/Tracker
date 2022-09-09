import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Acm from "./Components/ACM/Acm";
import Controller from "./Components/Controller/Controller";
import Userlogin from "./Components/Login/Userlogin";
import AboutUs from "./Components/AboutUs";

import { Provider } from "react-redux";
import store from "./Store/index";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <>
      <NavBar />
      <Provider store={store}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/controller" component={Controller} />
          <Route exact path="/acm" component={Acm} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/userlogin" component={Userlogin} />

          <Redirect to="/home" />
        </Switch>
      </Provider>
      {/* <Footer /> */}
    </>
  );
};
export default App;
