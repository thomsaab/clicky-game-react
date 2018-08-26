import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import './App.css';
import Header from './Components/Header/header';
import Wrapper from "./Components/Wrapper";
import RandomCard from "./Components/RandomCard";
import Rows from './Components/Bootstrap/Row';
import Col from './Components/Bootstrap/Col';
import Container from './Components/Bootstrap/Container';
//Image imports
import images from './image.json';


class Image extends Component {

  state = {
    count: 0,
    images: images
  };

  handleIncrement = event => {
    event.preventDefault();
    event.isDefaultPrevented()
    shuffle(images);
    this.setState({ count: this.state.count + 1})

    //Tinery Statement
  this.state.count > 11 ? alert("You have Won") : console.log(this.state.count); ;
 }
  
  render() {
    return (
      <div>
      <Wrapper>
        <p>{this.state.count}</p>
         <Container>
          <Rows>
            {this.state.images.map(image => (
            <Col size="md-3">
              <RandomCard
                id={image.id}
                image={image.image}
                onClick={this.handleIncrement}
              />
            </Col>
            ))}
            </Rows>
         </Container>
      </Wrapper> 
      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Image />
      </div>
    );
  }
}

export default App;
