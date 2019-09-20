import React from "react";
import Header from "./components/Header.js";

import CharacterList from './components/CharacterList';

import WelcomePage from './components/WelcomePage';

// import CharacterCard from './components/CharacterCard';

import { Route } from 'react-router-dom';
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header />

      <Route exact path="/" component={WelcomePage} />



      <Route path="/characters/:id" component={CharacterList} />

      <Route path="/searchform/" component={SearchForm} />

    </main>
  );
}
