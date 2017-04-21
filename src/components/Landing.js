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
            <h2 className="text-center">How To Play WeBet!</h2>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <h3 className="text-center">1. Choose A Challenge</h3>
                <img src="http://res.cloudinary.com/diwazxt1w/image/upload/v1492732584/eventexample_mkucej.png" className="img-responsve" />
              </div>
              <div className="col-sm-12 col-md-4">
                <h3 className="text-center">2. Climb The Leaderboard</h3>
                <img src="http://res.cloudinary.com/diwazxt1w/image/upload/v1492734613/leaderboard_rxs5ar.png" className="img-responsve" />
              </div>
              <div className="col-sm-12 col-md-4">
                <h3 className="text-center">3. Get Paid</h3>
                <img src="http://res.cloudinary.com/diwazxt1w/image/upload/v1492739139/withdraw_wotjmp.png" className="img-responsve" />
              </div>
            </div>
            <div className="row homeFooter">
                <h2 className="text-center">Footer</h2>
              </div>
          </div>
        </div>
      )
    }
  }

export default withRouter(Landing)