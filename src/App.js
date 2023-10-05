// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





import React from 'react';
import Navbar from './Components/Header';
import Sidebar from './Components/Sidebar';
import Video from './Components/Video';
import VideoList from './Components/VideoList' ;
import Dropdown from './Components/Dropdown';
// import  './App.css';

function App() {
  return (
    <div className='App' >
      <Navbar />
      <main >
        <Sidebar />
        <div className='content' >
          <Dropdown />
          <Video />
           <VideoList /> 
        </div>
      </main> 
      
    </div>
  );
}


export default App;


























