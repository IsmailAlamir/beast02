import React from "react";
import HornedBeast from "./HornedBeast";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import UserForm from "./UserForm";




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: this.props.Data,
      sel:this.props.Data

    }
  }

  welcomeing = () => {
    this.setState({
    })
    this.props.update();

  }

  numHorns = (num) => {


    let SelectedBeast = [];

    SelectedBeast = this.state.beast.filter((item) => {
      switch (num) {

        case 1:
        case 2:
          return item.horns === num;
        case 3:
          return item.horns >= num ;
        default: 
          return true;
        
      }
    })
 
    this.setState({
      sel: SelectedBeast
    })
  }





  render() {
    return (



      <>
        <UserForm Horns={this.numHorns} />

        <Button variant="light" onClick={this.welcomeing} >PRESS</Button>

        <Row xs={1} md={3} className="g-4">
          {
            this.state.sel.map((item) => (
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
