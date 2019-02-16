import React, {Component} from "react"
import va from './Misc/va.png'
class AboutMe extends Component {
    render() {
        return(

    <div className="Aboutme">
            <div className="aboutmetitle">
                <h1>About Me</h1>
            </div>
          <div className="Aboutmepic">
          <img className="vaCont" src={va} alt="logo" />
          <br/>
          <br/>
          <h1>Va Phi</h1>
         </div>
         <div className="aboutMeInfo">
            <div className="listCont">
            <div className="skills">
            <ul class="list-group-horizontal">
            <li class="list-group-item list-group-item-primary">PROFICIENT :</li>
            <li class="list-group-item list-group-item-success">Java</li>
            <li class="list-group-item list-group-item-success">HTML/CSS</li>
            <li class="list-group-item list-group-item-success">JavaScript</li>
            <li class="list-group-item list-group-item-success">Sql</li>
            </ul>
            </div>
            <div className="skills-1">
            <ul class="list-group-horizontal">
            <li class="list-group-item list-group-item-primary">FRAMEWORKS :</li>
            <li class="list-group-item list-group-item-success">Android</li>
            <li class="list-group-item list-group-item-success">React</li>
            </ul>
            </div>
            <div className="skills-2">
            <ul class="list-group-horizontal">
            <li class="list-group-item list-group-item-primary">SOFTWARE TOOLS :</li>
            <li class="list-group-item list-group-item-success">Android Studios</li>
            <li class="list-group-item list-group-item-success">Git/Github</li>
            <li class="list-group-item list-group-item-success">Visual Studios</li>
            <li class="list-group-item list-group-item-success">MySQL</li>
            <li class="list-group-item list-group-item-success">Eclipse</li>
            </ul>
            </div>
            </div>
         </div>
    </div>
          
        )
    }
}

export default AboutMe
