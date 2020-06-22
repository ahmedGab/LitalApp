import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./front-end/components/authentification/login"
import Users from "./front-end/components/users/listusers"
import Articles from "./front-end/components/articles/listarticles"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
     <Login />
     </Route>
     <Route path="/users">
       <Users />
     </Route>
<Route path="/articles">
<Articles/>
</Route>
     </Switch>
    </div>
  );
}

export default App;
