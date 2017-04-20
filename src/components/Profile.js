import React from 'react'
import { withRouter } from 'react-router'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import ProfilePosts from '../components/ProfilePosts'


class Profile extends React.Component {
render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }
    return (
        <div>
            <p>name: {this.props.data.user.name}</p>
            <p>email: {this.props.data.user.emailAddress}</p>
            <p>Credit Card #: {this.props.data.user.creditCard}</p>
            <p>point: {this.props.data.user.point}</p>
            <p>streak: {this.props.data.user.streak}</p>
        </div>
    )
  }
}

const userQuery = gql`
  query userQuery {
    user {
      id
      name
      emailAddress
      creditCard
      point
      streak
      image
    }
  }
`

export default graphql(userQuery)(Profile)