import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    const { dispatch } = this.props;
    // dispatch(fetchJokes(this.state.value));
    dispatch(fetchPosts('programmerhumor'))
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <form>
          <input type='text' id='newSubRed'></input>
          <button onSubmit={this.handleSubmit}>Fetch Posts</button>
        </form>
      </React.Fragment>
    )
  }
}



export default connect()(LoadSubreddit)

// = ({ dispatch }) => (