import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export default class Vote extends React.Component {

  static propTypes = {
    vote: React.PropTypes.object,
    user: React.PropTypes.object
  }
  state = {
    outcomeChoice: this.props.vote.outcomeChoice,
  }

  render () {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div className='pt3'>
            <p>User: {this.props.vote.user}</p>
            <p>Choice: {this.props.vote.outcomeChoice === true ? 'YES' : 'NO'}</p> 
        </div>
      </div>
    )
  }
}

