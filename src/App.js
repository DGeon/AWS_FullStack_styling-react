// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from "react";
// import SassComponent from "./SassComponent";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SassComponent />
//       </div>
//     );
//   }
// }

// export default App;

//--------------------0510 p233
// import React, { Component } from "react";
// import CSSModule from "./CSSModule";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <CSSModule />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  }
}

export default App;
