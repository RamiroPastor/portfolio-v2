import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import { LangContextProvider } from "core/contexts/LangContext";
import { Home } from "pages/Home/Home";
import './i18n';



function App() {

  const {t, i18n} = useTranslation(["translation"]);


  return (
    <Router>
      <LangContextProvider props={{t, i18n}}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </LangContextProvider>
    </Router>
  );
}

export default App;
