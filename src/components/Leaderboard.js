import React from 'react'
import Leaders from '../components/Leaders'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Leaderboard extends React.Component {
  
  static propTypes = {
    data: React.PropTypes.object,
  }

  render(){
    if (this.props.data.loading){
      return(<div>Loading...</div>)
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-md-offset-3">
            <div className="well">
              <h1 className="text-center">Leaderboard</h1>
              {this.props.data.allUsers.map((user) =>
              <Leaders key={user.id} user={user} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const UserQuery = gql `query UserQuery {
  allUsers(orderBy: point_DESC) {
    id
    image
    name 
    point 
    streak
  }
}`

export default graphql(UserQuery)(Leaderboard)