import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import "../css/Projects.css"

import caro1 from "../carousel/help.png"
import caro2 from "../carousel/weather.png"
import caro3 from "../carousel/emoji.png"
import caro4 from "../carousel/dadjokes.png"
import caro5 from "../carousel/meme.png"

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
			  <h3 style={{color: 'gold'}}>Help Command</h3>
			  <h6 style={{color: 'gold'}}>When using the help command, the bot will send a personal message to the user</h6>
			</Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
			<img
			  src= {caro2}
			  alt="secondslide"
			/>
  
			<Carousel.Caption>
			  <h3 style={{color: 'gold'}}>Weather command</h3>
			  <h6 style={{color: 'gold'}}>Using a weather library, can request weather forecast of a certain location </h6>
			</Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
			<img
			  src= {caro3}
			  alt="Thirdslide"
			/>
  
			<Carousel.Caption>
			  <h3 style={{color: 'gold'}}>Shrug/Tableflip-Unflip Command/</h3>
			  <h6 style={{color: 'gold'}}>
				Common commands to get the bot to display text emojis
			  </h6>
			</Carousel.Caption>
		  </Carousel.Item>

		  <Carousel.Item>
			<img
			  src= {caro4}
			  alt= "fourthslide"
			/>
			<Carousel.Caption>
			  <h3 style={{color: 'gold'}}>Dad-Jokes Command</h3>
			  <h6 style={{color: 'gold'}}>Using an array, the bot will display a random index holding a joke</h6>
			</Carousel.Caption>
		  </Carousel.Item>

		  <Carousel.Item>
			<img
			  src= {caro5}
			  alt= "fifthslide"
			/>
			<Carousel.Caption>
			  <h3 style={{color: 'gold'}}>Meme Command</h3>
			  <h6 style={{color: 'gold'}}>Using an array, the bot will display a random image</h6>
			</Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
	  );
	}
  }
  
  export default CarouselControl1;