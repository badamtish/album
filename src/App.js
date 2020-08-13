import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from './components/pages/Homepage';
import Header from './components/elements/Header';
import AlbumViewer from './components/elements/Viewer';
import Footer from './components/elements/Footer';

import Aparna from './data/Aparna.pdf'
import Nischal from './data/Nischal.pdf'

function App() {
  return (
    <div id="body">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/nischal">
            <AlbumViewer pdf={Nischal} />
          </Route>
          <Route path="/aparna">
            <AlbumViewer pdf={Aparna} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
