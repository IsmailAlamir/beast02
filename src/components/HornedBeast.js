import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import SelectedBeast from "./SelectedBeast";

class HornedBeast extends React.Component{

   
      welcomeing=()=>{
        this.setState({
          welcome:"HELLO!"
          
        })
      }
      

    constructor(props){
        super(props);
        this.state={
            numOfFavorite: 0
        }
    }
    counter = () => {
        this.setState({
            numOfFavorite:this.state.numOfFavorite+1
        })
    }

    render(){
     return(
        
        <Col>    
        
        <Card style={{ width: '24rem', height:'600px' }}>
        <Card.Img variant="top" src={this.props.img}  alt={this.props.title} title={this.props.title} onClick={this.counter}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.description} 
          <p>number of Favorite :❤️{this.state.numOfFavorite}</p>
          </Card.Text>
          <SelectedBeast/>
        </Card.Body>
      </Card>

      </Col>

   ) }
}


export default HornedBeast ;


  
    


