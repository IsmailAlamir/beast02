import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


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
          <p>number of Favorite :❤️{this.state.numOfFavorite}</p>
          <p>{this.props.dis}</p>
          <p>number of horns : {this.props.horns}</p>

          </Card.Text>
          <Button variant="danger" 
          onClick={()=>{this.props.myfunction(this.props.title)}}
          >open</Button>
        </Card.Body>
      </Card>

      </Col>

   ) }
}


export default HornedBeast ;


  
    


