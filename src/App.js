import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { Context } from "./Contexts/Context";
import en from './translations/en.json';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));
const Navbar = lazy(() => import('./MainComponents/Navbar').then(module => ({default:module.Navbar})));
const Quiz = lazy(() => import('./Quiz').then(module => ({default:module.Quiz})));
const Rules = lazy(() => import('./Rules').then(module => ({default:module.Rules})));
const Result = lazy(() => import('./Result').then(module => ({default:module.Result})));

function App() {

  const [quizStart, setQuizStart] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const [depressionScore, setDepressionScore] = useState(0);
  const [anxietyScore, setAnxietyScore] = useState(0);
  const [stressScore, setStressScore] = useState(0);

  const [language, setLanguage] = useState("en");
  const [currentLanguage, setCurrentLanguage] = useState(en);

  useEffect(() => {
    if(language === "en"){
      setCurrentLanguage(en)
    }
  },[language])

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div id="loading"><CircularProgress size={80}/></div>}>
          <Switch>

            <Context.Provider value={{
              en,
              currentLanguage,
              showNav, setShowNav,
              quizStart, setQuizStart,
              showResult, setShowResult,
              depressionScore, setDepressionScore,
              anxietyScore, setAnxietyScore,
              stressScore, setStressScore
            }}>
              {showNav ? <Navbar/> : ""}
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
