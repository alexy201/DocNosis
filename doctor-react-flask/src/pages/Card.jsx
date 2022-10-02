import "./Home.scss";
import React, { Component } from 'react'
import rash from '../rash.jpeg';
import mri from '../mri.webp';
import mole from '../mole.jpeg';
import her from '../her.png';
import drr from '../drr.png';
import drj from '../drj.jpeg';

function Img(props) {
    if (props.name == "rash"){
        return (
        <img style = {{width: '160px', height: '160px', borderRadius: '5px',boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)'}}
        src={rash} alt="Logo" className = "imageTest" />
        );
    }else if (props.name == "mole"){
        return (
        <img style = {{width: '160px', height: '160px', borderRadius: '5px',boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)'}}
        src={mole} alt="Logo" className = "imageTest" />
        );
    }else {
        return (
            <img style = {{width: '160px', height: '160px', borderRadius: '5px',boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)'}}
            src={mri} alt="Logo" className = "imageTest" />
        );
    }
  }

export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "cardsContainer">
              <div className = "cards">
                <div class = "thePost">
                  <div>
                    <div>
                      <div className = "centeringImage">
                        <Img name = {this.props.img}/>
                      </div>
                    </div>
                  </div>
                  <div class = "secondPart">
                    <div>
                    <div class = "title">{this.props.title}</div>
                      <div class = "description">
                        Hi Doctors,

                        I hope you are doing well! I constantly get these rashes and was wondering if these were harmful. They are
                        the most prominent during the nighttime and itches like crazy. Please let me know!
                      </div>
                      <div class = "bottom">
                        18 Comments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className = "cards1">
                <p>Top Responders</p>
                <div className = "triple">
                  <div class = "tripleFlex">
                    <img style = {{borderRadius: '100px', height: '85px', width: '85px',marginTop: '40px', objectFit: 'cover'}} src={her} alt="Logo" className = "imageTest" />
                    <div class = "flexer">
                      <p class = "titler">Dr. O</p>
                      <p class = "titlerB">2nd</p>
                    </div>
                  </div>
                  <div class = "tripleFlex">
                  <img style = {{borderRadius: '100px', height: '85px', width: '85px', objectFit: 'cover'}} src={drr} alt="Logo" className = "imageTest" />
                  <div class = "flexer">
                    <p class = "titler1">Dr. R</p>
                    <p class = "titler1P">1st</p>
                  </div>
                  </div>
                  <div class = "tripleFlex">
                  <img style = {{borderRadius: '100px', height: '85px', width: '85px', marginTop: '40px', objectFit: 'cover'}} src={drj} alt="Logo" className = "imageTest" />
                  <div class = "flexer">
                    <p class = "titler2">Dr. J</p>
                    <p class = "titler2B">3rd</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}