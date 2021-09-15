import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Context } from "./Contexts/Context";
import en from './translations/en.json';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));
const Quiz = lazy(() => import('./Quiz').then(module => ({default:module.Quiz})));
const Rules = lazy(() => import('./Rules').then(module => ({default:module.Rules})));
const Result = lazy(() => import('./Result').then(module => ({default:module.Result})));

function App() {

  const [quizStart, setQuizStart] = useState(false);
  const [depressionScore, setDepressionScore] = useState(0);
  const [anxietyScore, setAnxietyScore] = useState(0);
  const [stressScore, setStressScore] = useState(0);

  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>

            <Context.Provider value={{
              en,
              quizStart, setQuizStart,
              language, setLanguage,
              depressionScore, setDepressionScore,
              anxietyScore, setAnxietyScore,
              stressScore, setStressScore
            }}>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route exact path="/rules">
                <Rules/>
              </Route>
              <Route exact path="/quiz">
                <Quiz/>
              </Route>
              <Route exact path="/result">
                <Result/>
              </Route>
            </Context.Provider>

          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
