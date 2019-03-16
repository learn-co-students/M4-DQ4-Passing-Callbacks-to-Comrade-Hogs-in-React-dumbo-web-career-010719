import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  state = {
      panicked: false
  }

  throwAFit = () => {
    this.setState({panicked:true})

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.props.alterEnvironment("inhospitable")
    }, false)
  }

  relax = () => {
    this.setState({panicked:false})
  }

  exclaim = () => {
    this.throwAFit()
    if (this.state.panicked) return
    setTimeout(this.relax, 3000)
    this.exclaimAudio.play()
    this.squeelAudio.play()
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    // console.log(this.state.panicked)
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
