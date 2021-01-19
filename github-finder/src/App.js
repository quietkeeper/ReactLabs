import React, {Fragment,Component} from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import './App.css';

class App extends Component{
  render(){
    return(
       <Fragment>
       <h1 className="App-header">
       
         <Navbar></Navbar>
         <div className="container"><Users/></div>
         
       </h1>
     </Fragment>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//         Hello React
//       </header>
//     </div>
//   );
// }

export default App;
