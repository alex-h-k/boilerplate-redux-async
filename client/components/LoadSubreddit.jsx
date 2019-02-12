import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component { 
  constructor (props) {
    super(props)
    this.state = {
      subReddit: 'newzealand'
    }
    this.state.subReddit = this.state.subReddit.bind(this)
  }

  

  render() {
    
   

    return (
      <div>
        <input type="text" onChange={}></input>
        <button onClick={() => this.props.fetchPostsFn}>
          Fetch Posts
        </button>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (disaptch) => {
  return {
    fetchPostsFn: () => dispatch(fetchPosts(this.state.subReddit))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadSubreddit)
