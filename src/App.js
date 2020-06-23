import React from 'react';
import Login from "./front-end/components/authentification/login"
import Users from "./front-end/components/users/listusers"
import Historique from './front-end/components/historique';

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
<Route path="/historique">
       <Historique />
     </Route>

     </Switch>
    </div>
  );
}

export default App;
