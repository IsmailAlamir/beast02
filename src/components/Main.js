import React from "react";
// import data from "./data";
import HornedBeast from "./HornedBeast";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SelectedBeast from "./SelectedBeast";




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  welcomeing = () => {
    this.setState({
    })
    this.props.update();

  }



  render() {
    return (



      <>
        <Button variant="light" onClick={this.welcomeing} >PRESS</Button>

        <Row xs={1} md={3} className="g-4">
        {this.props.Data.map((item) => (
          <HornedBeast
            img={item.image_url}
            title={item.title}
            dis={item.description}
            myfunction={this.props.myfunction}
          />
        ))}
        </Row>


      </>
    )
  }
}


export default Main;
