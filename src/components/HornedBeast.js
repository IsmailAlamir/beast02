import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class HornedBeast extends React.Component{

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
        

        <Card style={{ width: '18rem' ,display :"inline-block" }}>
        <Card.Img variant="top" src={this.props.img}  alt={this.props.title} title={this.props.title} onClick={this.counter}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.description} 
          <p>number of Favorite :❤️{this.state.numOfFavorite}</p>
          </Card.Text>
          <Button variant="danger" onClick={this.counter} >Favorite ❤️</Button>
        </Card.Body>
      </Card>


   ) }
}


export default HornedBeast ;
