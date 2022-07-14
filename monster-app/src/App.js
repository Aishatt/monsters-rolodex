import React, {Component} from "react"
import Table from './Table'
import List from './List'
import Header from './Header'
//const heading = <h1 className="site-heading">Hello, React</h1>;

class App extends Component{
  render(){
    return(
      <div className="container"> 
     < Header/> 
     < Table/>
     < List/>
    
     </div>
    );
  }
}
export default App