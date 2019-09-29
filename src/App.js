import React from 'react';
import Form from './Components/Form/Form';
import Image from './assets/image/Webp.png'
import ToolBar from './Components/NavBar/ToolBar/ToolBar';
// import Web from './Container/Wb';
// import All from './Container/All';
// import { Route, Switch, } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{marginTop:60, fontSize:32, left: 176,top: 144, position:'absolute' , left :176,top :44 ,fontWeight:'bold'}}>
      <p style={{ fontSize:32,fontWeight:'bold'}}>
          از تخصص و مهادت خود کسب درامد کنید
          </p>
          <p  style={{ fontSize:18,}}>
            با امکان کسب دامد بیش از سی میلیون ریال در ماه
          </p>
          
      </div>
        
     
      <ToolBar />
      <div style ={{marginBottom:50 , height:'100%'}}> 
      <img  className= 'BackImage' src={Image} alt='image' />
      
      <Form />
      </div>
      
     
    </div>
  );
}

export default App;
