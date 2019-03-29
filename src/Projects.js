import React, {Component} from "react"
import './css/Projects.css'
import Carousel1 from "./components/CarouselControl"


class Projects extends Component {
    render() {
        return(

    <div className="Projects">
            <div className="projecttitle">
                <h1>Projects</h1>
            </div>
            <div className="carousel1">
            <h2>Discord Bot</h2>
            <Carousel1 />
            </div>
    </div>
          
        )
    }
}

export default Projects
