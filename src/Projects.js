import React, {Component} from "react"
import './css/Projects.css'
import Carousel from "./components/CarouselControl"
import Carousel1 from "./components/CarouselControl1"


class Projects extends Component {
    render() {
        return(

    <div className="Projects">
            <div className="projecttitle">
                <h1>Projects</h1>
            </div>
            <div className="carousel1">
            <h2 style={{textDecorationLine: 'underline'}}>Discord Bot</h2>
            <br/>
            <Carousel />
            </div>

            <div className="carousel2">
            <br/>
            <br/>
            <br/>
            <h2 style={{textDecorationLine: 'underline'}}>BatteryXChange</h2>
            <br/>
            <Carousel1 />
            </div>
    </div>
          
        )
    }
}

export default Projects
