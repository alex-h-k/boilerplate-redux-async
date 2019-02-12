import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'



class LoadSubreddit extends React.Component {
constructor(props){
  super(props)
  this.state = {
    value: ''
  }
}

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  render(){
    //why does it not work inside form?}
    return(
      <div>
      <form onChange={this.handleChange}>
        <input type="text"/>
    </form>
      
      <button onClick={() => this.props.dispatch(fetchPosts(this.state.value))}>
        Fetch Posts
      </button> 
    </div>
    )
}

}
 

  


export default connect()(LoadSubreddit)
