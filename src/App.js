import React, { Component } from 'react';
import './App.scss';
import ToolBar from './Components/NavBar/ToolBar/ToolBar';
import What from './Components/Sections/What/Waat';
import Why from './Components/Sections/Why/Why';
import Submit from './Components/Sections/Submit/Submit';
import Download from './Components/Sections/Download/Download';
import BestStuff from './Components/Sections/BestStuff/BestStuff';
import Question from './Components/Sections/Questions/Question';
import SideDrawer from './Components/NavBar/SideDrawer/SideDrawer'

class App extends Component {
  state = {
    showSD: false
  }
  sdCloseHandler = () => {
    this.setState({ showSD: false });
  }
  sdToggleHandler = () => {
    this.setState((prevState) => {
      return { showSD: !prevState.showSD };
    }
    );
  }

  render() {
    return (
      <div className="App">
        <ToolBar
          drawerToggleclicked={this.sdToggleHandler} />
        <SideDrawer
          open={this.state.showSD}
          closed={this.sdCloseHandler} />
        <What />
        <Why />
        <Submit />
        <BestStuff />
        <Download />
        <Question />

      </div>
    );
  }
}

export default App;

