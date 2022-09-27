import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import { LangContextProvider } from "core/contexts/LangContext";
import { Header  } from "core/layout/Header/Header";
import { LangNav } from "core/layout/LangNav/LangNav";
import { Cv   } from "pages/Cv/Cv";
import { Home } from "pages/Home/Home";
import { SvgIcons } from "pages/SvgIcons/SvgIcons";
import "./i18n";



function App() {

  const {t, i18n} = useTranslation(["translation"]);


  return (
    <Router>
      <LangContextProvider t={t} i18n={i18n}>
        <div className="App">
          <Header/>
          <LangNav/>
          <main>
            <Routes>
              <Route path="/"         element={<Home/>}/>
              <Route path="svg-icons" element={<SvgIcons/>}/>
              <Route path="/cv"       element={<Cv/>}/>
            </Routes>
          </main>
        </div>
      </LangContextProvider>
    </Router>
  );
}

export default App;
