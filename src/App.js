import React, {Component} from "react";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Main from "./components/Main/main"
import Routing from './routing';

class App extends Component{
  render(){
    return(
      <div>
      <Header/>
      <Routing />
      {/* <Footer /> */}
    </div>
    )
  }
}

export default App;