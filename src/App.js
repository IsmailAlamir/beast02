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
            show:false,
            selected:{},
  }
}
myfunction =(title)=>{
  const sel=data.find(beast=>beast.title === title );
  this.setState({
    show:true,
    selected:sel


  })
}

welcomeing=()=>{
  this.setState({
    welcome:"HELLO!"
  })
}

handleClose=()=>{
  this.setState({
    show:false

  })
}

  render() {
    return (

      <div style={{ width: "100%", textAlign: 'center', margin: "0", padding: "20px" }}>
        <Header />
        <h1>{this.state.welcome}</h1>
        <Main update={this.welcomeing} myfunction={this.myfunction} Data={data} />
        <Footer />
        <SelectedBeast showModal={this.state.show} handleClose={this.handleClose} selected={this.state.selected}/>
      </div>)
  }


}

export default App;
