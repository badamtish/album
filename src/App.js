import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Homepage from './components/pages/Homepage';
import Header from './components/elements/Header';
import AlbumViewer from './components/elements/Viewer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Aparna from './data/Aparna (1).pdf'
import Nischal from './data/Nischal (2).pdf'

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/nischal">
            <AlbumViewer pdf={Nischal}/>
          </Route>
          <Route path="/aparna">
            <AlbumViewer pdf={Aparna}/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
