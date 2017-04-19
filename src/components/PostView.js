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

const PostQuery = gql`
  query {
    Post(id: "cj1o6x3li9lzd0105brj9z7s8") {
      id
      title
      description
      pointCost
    }
  }
`

export default graphql(PostQuery, { options: { forceFetch: true }})(withRouter(PostView))
