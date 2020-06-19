import React from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage'
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Navbar from './Components/Navbar/Navbar';
import HostelList from './Components/Hostellist/HostelList';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

class App extends React.Component {
  render(){
  return (
    <React.Fragment>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/register" component={Register}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/hostelList" component={HostelList}/>
      </Switch>
    </Router>
    </React.Fragment>
  );
}
}

export default App;
