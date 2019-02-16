import React, {Component } from "react"
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'

class NavSlider extends Component {

    constructor(props) {
        super(props);
        
        this.hoverNav = this.hoverNav.bind(this);
        this.state = {
            isHovering: false
        };
    }

    hoverNav() {
        this.setState(
            this.setState(this.hoverNavState)
        )}
    

    hoverNavState(state) {
        return {
            isHovering: !state.isHovering
                };
    }

    render() {
        return (
            <div>
                <div className="Menu"
                onMouseEnter={this.hoverNav}
                onMouseLeave={this.hoverNav}
                >
                <div className="MenuName">
                    <p>Menu</p>
                </div>
                </div>

            {
            this.state.isHovering &&
                <div className="Navbar"
                onMouseEnter={this.hoverNav}
                onMouseLeave={this.hoverNav}
                >
                <div className="NavbarCont"> 
                    <h3>Menu</h3>
                </div>
                </div>
            }
            </div>
        );
    }
}

export default NavSlider