import React from 'react'
import Post from '../components/Post'
import { graphql } from 'react-apollo'
import {withRouter, routeParams} from 'react-router'
import gql from 'graphql-tag'



class PostView extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
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
          <p>Outcomes: {this.props.data.Post.outcomes}</p>
        </div>
      </div>
    )
  }
}
const Path = location.pathname.substr(1);

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

export default graphql(PostQuery)(withRouter(PostView))
