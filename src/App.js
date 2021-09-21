import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { Context } from "./Contexts/Context";
import en from './translations/en.json';
import my from './translations/my.json';

const Main = lazy(() => import('./MainComponents/Main').then(module => ({default:module.Main})));
const Navbar = lazy(() => import('./MainComponents/Navbar').then(module => ({default:module.Navbar})));
const About = lazy(() => import('./MainComponents/About').then(module => ({default:module.About})));
const Contact = lazy(() => import('./MainComponents/Contact').then(module => ({default:module.Contact})));
const Hotlines = lazy(() => import('./MainComponents/Hotlines').then(module => ({default:module.Hotlines})));

const Quiz = lazy(() => import('./QuizComponents/Quiz').then(module => ({default:module.Quiz})));
const Rules = lazy(() => import('./QuizComponents/Rules').then(module => ({default:module.Rules})));
const Result = lazy(() => import('./QuizComponents/Result').then(module => ({default:module.Result})));

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
    } else if (language === "my"){
      setCurrentLanguage(my)
    }
  },[language])

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div id="loading"><CircularProgress disableShrink={true} size={80}/></div>}>
          <Switch>

            <Context.Provider value={{
              en,
              currentLanguage, setLanguage, language,
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
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route exact path="/hotlines">
                <Hotlines/>
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
