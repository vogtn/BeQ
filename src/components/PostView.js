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
      </div>
    )
  }
}
const Path = location.pathname.substr(1);
console.log(Path)
const PostQuery = gql`
  query PostQuery {
    Post {
  query {
    Post(id:"${Path}") {
      id
      title
      description
      pointCost
    }
  }
`

export default graphql(PostQuery)(withRouter(PostView))
