import React from 'react'
import Vote from '../components/Vote'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ListVotes extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
    postId: React.PropTypes.string
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }
    return (
      <div className='w-100 flex justify-center'>
      {console.log(this.props.data)}
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.data.allUserChoices.map((vote) =>
            (this.props.postId === vote.post) ? <Vote key={vote.id} vote={vote} /> : null
          )}
        </div>
      </div>
    )
  }
}

const FeedQuery = gql`query FeedQuery {
  allUserChoices(orderBy: createdAt_DESC) {
    id
    outcomeChoice
    post
    user
  }
}`
export default graphql(FeedQuery)(ListVotes)
