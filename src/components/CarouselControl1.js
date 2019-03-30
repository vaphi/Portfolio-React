import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import "../css/Projects.css"

import caro1 from "../Misc/carousel1/login.png"
import caro2 from "../Misc/carousel1/signup.png"
import caro3 from "../Misc/carousel1/payment.png"
import caro4 from "../Misc/carousel1/token.png"
import caro5 from "../Misc/carousel1/ty.png"

class CarouselControl1 extends Component {
	constructor(props, context) {
	  super(props, context);
  
	  this.handleSelect = this.handleSelect.bind(this);
  
	  this.state = {
		index: 0,
		direction: null,
	  };
	}
  
	handleSelect(selectedIndex, e) {
	  this.setState({
		index: selectedIndex,
		direction: e.direction,
	  });
	}
  
	render() {
	  const { index, direction } = this.state;
  
	  return (
		<Carousel
		  activeIndex={index}
		  direction={direction}
		  onSelect={this.handleSelect}
		>
		  <Carousel.Item>
			<img
			  src= {caro1}
			  alt= "firstslide"
			/>
			<Carousel.Caption>
			  <h3 style={{color: 'black'}}>Login Page</h3>
			  <h5 style={{color: 'black'}}>Takes phone number and pass word and checks database if it exist</h5>
			</Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
			<img
			  src= {caro2}
			  alt="secondslide"
			/>
  
			<Carousel.Caption>
			  <h3 style={{color: 'black'}}>Sign Up Page</h3>
			  <h5 style={{color: 'black'}}>Takes a phone number and password and saves it to database</h5>
			</Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
			<img
			  src= {caro3}
			  alt="Thirdslide"
			/>
  
			<Carousel.Caption>
			  <h3 style={{color: 'black'}}>Payment Page/</h3>
			  <h5 style={{color: 'black'}}>
					Users are charged flat fee using Paypal's API before they can use the product
			  </h5>
			</Carousel.Caption>
		  </Carousel.Item>

		  <Carousel.Item>
			<img
			  src= {caro4}
			  alt= "fourthslide"
			/>
			<Carousel.Caption>
			  <h3 style={{color: 'black'}}>Token Session</h3>
			  <h5 style={{color: 'black'}}>Users are given a token to be able to access private routes such as the payment page and the thank you page</h5>
			</Carousel.Caption>
		  </Carousel.Item>

		  <Carousel.Item>
			<img
			  src= {caro5}
			  alt= "fifthslide"
			/>
			<Carousel.Caption>
			  <h3 style={{color: 'black'}}>Thank You Page</h3>
			  <h5 style={{color: 'black'}}>After successful payment, users are redirected to the thank you page</h5>
			</Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
	  );
	}
  }
  
  export default CarouselControl1;