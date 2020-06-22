import React from 'react';
import Login from "./front-end/components/authentification/login"
import Users from "./front-end/components/users/listusers"
<<<<<<< HEAD
import Articles from "./front-end/components/articles/listarticles"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
=======

import { Route, Switch } from "react-router-dom";
import Historique from './front-end/components/historique';
>>>>>>> ef48c334ef85cb0b2274d910cf24d643bea27ef0

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
<<<<<<< HEAD
<Route path="/articles">
<Articles/>
</Route>
=======
     <Route path="/historique">
       <Historique />
     </Route>
     

>>>>>>> ef48c334ef85cb0b2274d910cf24d643bea27ef0
     </Switch>
    </div>
  );
}

export default App;
