import React, {Component} from "react"
import Particles from "react-particles-js"

class ParticlesHome extends Component {

    render() {
        return (

            <div>
            <Particles className= "HomeParticles"
            params={{
              particles: {
                number: { 
                    value: 450, 
                    density: { enable: true, value_area: 4000}
                },
                color: {
                  value: "#817af5"
                },
                shape: {
                  type: "triangle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.8967030151638882,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 0.8108919000008107,
                    opacity_min: 0.2189408130002189,
                    sync: false
                  }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 9,
                    size_min: 1.6,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 250,
                  color: "#b0aadc",
                  opacity: 0.5043954460296871,
                  width: 1.25
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "bounce",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab"
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 20,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 150,
                    duration: .1
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
          </div>

        )
    }

}

export default ParticlesHome