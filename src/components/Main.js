import React from "react";
import HornedBeast from "./HornedBeast";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import UserForm from "./UserForm";




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast:this.props.Data

    }
  }

  welcomeing = () => {
    this.setState({
    })
    this.props.update();

  }

  numHorns=(num)=>{


      let SelectedBeast=[];
      if(num!==0){
        SelectedBeast= this.state.beast.filter(item=>{
              if(item.horns===parseInt(num)){
                  return item;
              }
          })
      }else{
        SelectedBeast= this.state.beast; 
      }
      this.setState({
        beast:SelectedBeast
      })
  }
    




  render() {
    return (



      <>
              <UserForm Horns={this.numHorns}/>

        <Button variant="light" onClick={this.welcomeing} >PRESS</Button>

        <Row xs={1} md={3} className="g-4">
        {
        this.state.beast.map((item) => (
          <HornedBeast
            img={item.image_url}
            title={item.title}
            dis={item.description}
            horns={item.horns}
            myfunction={this.props.myfunction}
          />

        ))


         }
       
        </Row>


      </>
    )
  }
}


export default Main;
