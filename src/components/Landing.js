import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'



class Landing extends Component {

    render () {
      return (
        <div>
          <div className='hero'>
            <div className="hero-btns">
              <h2>Bet and Challenge Your Friends</h2>
              <a href="#" className="btn btn-primary btn-lg">Learn More</a>
              <a href="#" className="btn btn-success btn-lg">Sign Up</a>
            </div>
          </div>
          <div className="container explain-box">
            <h2 className="text-center">How To Play Nadascam</h2>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <h3 className="text-center">Left</h3>
                <p>Lorem ipsum dolor sit amet, consectetur 
                  adipisicing elit. Itaque iure, possimus 
                  adipisci</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <h3 className="text-center">Middle</h3>
                <p>Lorem ipsum dolor sit amet, consectetur 
                  adipisicing elit. Itaque iure, possimus 
                  adipisci</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <h3 className="text-center">Right</h3>
                <p>Lorem ipsum dolor sit amet, consectetur 
                  adipisicing elit. Itaque iure, possimus 
                  adipisci</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }


export default withRouter(Landing)