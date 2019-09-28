import React from 'react';
import Form from './Components/Form/Form';
import Image from './assets/image/Webp.png'
// import ToolBar from './Components/NavBar/ToolBar/ToolBar';
// import Web from './Container/Wb';
// import All from './Container/All';
// import { Route, Switch, } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={Image} alt='image' />
      {/* <ToolBar /> */}
      <Form />
      {/* <Switch>
        <Route path="/web" exact component={Web} />
        <Route path="/all" component={All} />

      </Switch> */}
    </div>
  );
}

export default App;
