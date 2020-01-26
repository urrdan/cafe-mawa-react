import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import Navigator from './components/Navigator'; //
import beignets from './components/beignets';
import samosa from './components/samosa';


function App() {
  return (
    <div className="App">
      <Navigator/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/beignets' component={beignets}/>
        <Route path='/samosa' component={samosa}/>

      </Switch>

    </div>
  );
}

export default App;
