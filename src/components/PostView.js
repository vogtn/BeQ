import React from 'react'
import Post from '../components/Post'
import { graphql } from 'react-apollo'
import {withRouter, routeParams} from 'react-router'
import gql from 'graphql-tag'



class PostView extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    makeBid: React.PropTypes.func
  }

  state = {
    pointCost: 5,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }
    return (
      <div className='w-100 flex justify-center'>
        {console.log(this.props.data)}
        <div className="well">
          <h1>Title: {this.props.data.Post.title}</h1>
          <p>description: {this.props.data.Post.description}</p>
          <p>point cost: {this.props.data.Post.pointCost}</p>
          <p>Finish Date: {this.props.data.Post.finish}</p>
          <img src={this.props.data.Post.imageUrl} />
          <p>Outcome: {this.props.data.Post.outcomes}</p>
          <button onClick={this.handleYes}>BID YES ${this.props.data.Post.pointCost}</button>
          <button onClick={this.handleNo}>BID NO ${this.props.data.Post.pointCost}</button>
        </div>
      </div>
    )
  }
  handleYes = () => {
    const {pointCost} = this.state.pointCost
    this.props.makeBid({variables: {pointCost}})
      .then(() => {
        this.props.router.replace('/')
      })
  }
  handleNo = () => {
    const {pointCost} = this.state.pointCost
    this.props.makeBid({variables: {pointCost}})
      .then(() => {
        this.props.router.replace('/')
      })
  }
}
const Path = location.pathname.substr(1);

const makeBid = gql`
  mutation makeBid($pointCost: Int!) {
    createUserChoice(pointCost: $pointCost) {
      pointCost
    }
  }`

const PostQuery = gql`
  query {
    Post(id:"${Path}") {
      id
      title
      description
      pointCost
      finish
      imageUrl
      outcomes
    }
  }
`

export default graphql(makeBid, {name: 'makeBid'})(graphql(PostQuery)(withRouter(PostView)))
