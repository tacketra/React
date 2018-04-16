import React, { Component } from 'react';
// import './App.css';

class HelloReact extends Component
{
  render()
  {
    // need to have "(" on same line as return otherwise get a compile error?
    return (
      <div class="demo">
        {this.props.text}
         <input/> 
        <p>
          {new Date().toString()}
        </p> 
      </div>
    );
  }
}

// import logo from './logo.svg';
// import './App.css';

// class HelloReact extends Component {
//   render() {
//     return (
//       <div className="App">

//         <p className="App-intro">
//           {new Date().toString()}
//         </p>
//       </div>
//     );
//   }
// }


// class HelloReact extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to ReactHello!</h1>
//         </header>
//         <p className="App-intro">
//           To get started, {this.props.text} edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


export default HelloReact;
