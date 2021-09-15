import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Context } from "./Contexts/Context";

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));
const Quiz = lazy(() => import('./Quiz').then(module => ({default:module.Quiz})));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>

            <Context.Provider value={{}}>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route exact path="/quiz">
                <Quiz/>
              </Route>
            </Context.Provider>

          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
