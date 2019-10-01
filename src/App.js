import React from 'react';
import Form from './Components/Form/Form';
import ToolBar from './Components/NavBar/ToolBar/ToolBar';
import What from './Components/Sections/What/Waat';
import Why from './Components/Sections/Why/Why';
import Submit from './Components/Sections/Submit/Submit';
import Download from './Components/Sections/Download/Download';
import BestStuff from './Components/Sections/BestStuff/BestStuff';
import Question from './Components/Sections/Questions/Question';


import './App.css';

function App() {
  return (
    <div className="App">
      <ToolBar />
      <div style={{ marginTop: 60, position: 'relative', right: 300, top: 80 }}>
        <p style={{ fontSize: 32, fontWeight: 'bold', lineHeight: '130%' }}> از تخصص و مهارت خود کسب درامد کنید </p>
        <p style={{ fontSize: 18, textAlign: 'right', lineHeight: '120%' }}>  با امکان کسب دامد بیش از سی ملیون ریال در ماه</p>
      </div>
      <What />
      <Why />
      <Submit />
      <BestStuff />
      <Download />
      <Question />

    </div>


  );
}

export default App;