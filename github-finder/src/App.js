import React, {Fragment,Component} from 'react';
import Navbar from './component/layout/Navbar';
import UserItem from './component/users/UserItem';
import './App.css';

class App extends Component{
  render(){
    return(
       <Fragment>
       <h1 className="App-header">
       
         <Navbar></Navbar>
         <UserItem/>
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
