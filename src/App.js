import React, {Component} from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import here all the required components used by the router such as SignIn, Register, ...

class App extends Component {
    render(){
        return(
           <Router>
               <div>
                   <Header />
                   <Route exact path="/" component={Home}/>
                   <Route path="/about" component={About}/>
                   <Route path="/contact" component={Contact}/>
               </div>
           </Router>
        )
    }
}
export default App