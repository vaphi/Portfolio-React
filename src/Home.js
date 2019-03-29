import React, {Component} from "react"
import {SocialIcon} from "react-social-icons"
import resume from './Misc/resume.png'
import Resfile from './Misc/VaPhi_Resume.pdf'

class Home extends Component {
    render() {
        return(
          <div className="Homesec">
          <div className="HeaderTitle">
          <h1>Va M. Phi</h1>
          <div>
          </div>
          <h6>Interested in Front-End | Back-End | Mobile Development </h6>
          <h6 className="school" >|| UNC Charlotte Fall 2018 ||</h6>
      </div>
      <div className="Navicons">
        <span>
            <SocialIcon height="3vh" width="3vw"url="https://www.linkedin.com/in/va-phi-054b03161/"
            />
        </span>

        <span>
            <SocialIcon url="https://github.com/vaphi" />
        </span>

        <span>
          <a href="mailto:phi.va96@gmail.com" target="_blank">
            <SocialIcon network="mailto" 
            />
          </a>
        </span>
        <span className="ResIcon">
        <a href={Resfile}>
            <img src={resume} width="50px" height="50px" alt="va"/>
        </a>
        </span>
      </div>
          </div>
          

        )
    }
}

export default Home