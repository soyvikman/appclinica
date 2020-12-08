import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Extranet from './modules/extranet';
import Intranet from './modules/intranet';

function App() {
  return (
    <BrowserRouter>
      <Route
        path='/'
        component={Extranet}
        exact
      >
        <Redirect to='/home'/>
      </Route>
      <Route path='/home' component={Extranet} />
      <Route path='/intranet' component={Intranet} />
    </BrowserRouter>
  );
}

export default App;
