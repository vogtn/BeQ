import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreateUser extends React.Component {

  static propTypes = {
    router: React.PropTypes.object.isRequired,
    createUser: React.PropTypes.func.isRequired,
    data: React.PropTypes.object.isRequired,
  }

  state = {
    emailAddress: '',
    name: '',
    emailSubscription: false,
    wallet: 0
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    // redirect if user is logged in or did not finish Auth0 Lock dialog
    if (this.props.data.user || window.localStorage.getItem('auth0IdToken') === null) {
      console.warn('not a new user or already logged in')
      this.props.router.replace('/')
    }

    return (
      <div className='w-100 pa4 flex justify-center'>
        <div style={{ maxWidth: 400 }} className=''>
          <input
            className='w-100 pa3 mv2'
            value={this.state.emailAddress}
            placeholder='Email'
            onChange={(e) => this.setState({emailAddress: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.name}
            placeholder='Name'
            onChange={(e) => this.setState({name: e.target.value})}
          />
          <div>
            <input
              className='w-100 pa3 mv2'
              value={this.state.emailSubscription}
              type='checkbox'
              onChange={(e) => this.setState({emailSubscription: e.target.checked})}
            />
            <span>
              Subscribe to email notifications?
            </span>
          </div>

          {this.state.name &&
          <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this.createUser}>Sign up</button>
          }
        </div>
      </div>
    )
  }

  createUser = () => {
    console.log(this.state.wallet)
    const variables = {
      idToken: window.localStorage.getItem('auth0IdToken'),
      emailAddress: this.state.emailAddress,
      name: this.state.name,
      wallet: this.state.wallet,
      emailSubscription: this.state.emailSubscription,
    }

    this.props.createUser({ variables })
      .then((response) => {
          this.props.router.replace('/')
      }).catch((e) => {
        console.error(e)
        this.props.router.replace('/')
      })
  }
}

const createUser = gql`
  mutation ($idToken: String!, $name: String!, $emailAddress: String!, $wallet: Int!, $emailSubscription: Boolean!){
    createUser(authProvider: {auth0: {idToken: $idToken}}, name: $name, emailAddress: $emailAddress, wallet: $wallet, emailSubscription: $emailSubscription) {
      id
    }
  }
`

const userQuery = gql`
  query {
    user {
      id
    }
  }
`

export default graphql(createUser, {name: 'createUser'})(
  graphql(userQuery, { options: { forceFetch: true }})(withRouter(CreateUser))
)
