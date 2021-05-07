import React ,{Component}from 'react';
class App extends Component{
  constructor(){
    super();
    this.state={
      count:0
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(prevState=>{
      return{
        count:prevState.count+1
      }
    })
  }
  render(){
     return(
      <div>
         <h2>welcomw ro practice</h2>
         <h3>{this.state.count}</h3>
         <button onClick={this.handleClick}>change!</button>
      </div>
    )
  }
   
  }
export default App;


