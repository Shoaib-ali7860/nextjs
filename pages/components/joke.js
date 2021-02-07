import {Component} from 'react'
import Error from './_error'
class Joke extends Component{
state={joke:{},status:true}

componentDidMount()
  {
  	  fetch('https://official-joke-api.appspot.com/random_joke')
  	  .then(response=>response.json())
  	  .then(json=>this.setState({joke:json}))
  	  .catch(error=>this.setState({status:false}))
  }
render()
  {
  	if(!this.state.status)
  		return (
            <Error />
  			)
  	 return(
             <div>{this.state.joke.setup}<em>{this.state.joke.punchline}</em></div>

  	 	)
  }
}
export default Joke
// export default Joke