import React from "react";
// MobX
import { Provider } from "mobx-react";
import commonStore from "./stores/commonStore";
// React Router
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const stores = {
  commonStore
};

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <Switch>
          
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
