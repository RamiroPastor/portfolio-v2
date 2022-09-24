import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import { LangContextProvider } from "core/contexts/LangContext";
import './i18n';



function App() {

  const {t, i18n} = useTranslation(["translation"]);

  console.log(i18n.lng);

  return (
    <Router>
      <LangContextProvider props={{t, i18n}}>
        <div className="App">
          HOLA MUNDO
        </div>
      </LangContextProvider>
    </Router>
  );
}

export default App;
