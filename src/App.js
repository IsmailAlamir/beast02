import React from 'react';
import data from "./components/data";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {

constructor(props){
  super(props);
  this.state={
            welcome:"...........",
            data:data
  }
}

welcomeing=()=>{
  this.setState({
    welcome:"HELLO!"
  })
}

  render() {
    return (

      <div style={{ width: "100%", textAlign: 'center', margin: "0", padding: "20px" }}>
        <Header />
        <h1>{this.state.welcome}</h1>
        <Main data={data} update={this.welcomeing} />
        <Footer />
      </div>)
  }


}

export default App;
