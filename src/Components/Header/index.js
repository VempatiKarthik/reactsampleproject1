// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React, {Component} from 'react';

// function Header() {
//   return (
//     <header>
//       {/* youtubr logo */}
//       <img scr='https://static.toiimg.com/photo/77691971.cms?width=500&resizemode=4&imgsize=1090798'  alt='youtube logo' />
//       {/* seachbar */}
//       <input type='text' placeholder='search for video' />
//       {/* UserProfile Icon */}
//        <img src='https://static.toiimg.com/photo/77691971.cms?width=500&resizemode=4&imgsize=1090798'  alt='Helloo' />

//     </header>
//   );
//   }  



  //       <nav className='navContainer'>
  //         <div>
  //           <input type='text' placeholder='Search' />
  //           <ul className='navbar'>
  //             <li className='homeLink'>
  //               <a href={'/'}>Home</a>
  //             </li>
  //             <li className='subscriptionLink'>
  //               <a href={'/'}>Subscription</a>
  //             </li>
  //             <li className='downloadsLink'>
  //               <a href={'/'}>Downloads</a>
  //             </li>
  //             <li className='saveLink'>
  //               <a href={'/'}>Save</a>
  //             </li>
  //             <li className='trendingLink'>
  //               <a href={'/'} >Trending</a>
  //             </li>
  //           </ul>
  //         </div>
  //       </nav>



  // )
// }


// export default Header;






// import React from 'react';
import './index.css';

class Navbar extends Component {
  // render() {
  //   return (
  //     <nav className="navbar">
  //       <div className="container">
  //         <a className="navbar-brand" href="/">My App</a>
  //         <ul className="navbar-nav">
  //           <li className="nav-item">
  //             <a className="nav-link" href="/">Home</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="/about">About</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="/contact">Contact</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //   );
  // }


  // import React, { Component } from 'react';
// import './Navbar.css'; // Import the CSS file for styling
// class Navbar extends Component {
  
  constructor(props) { 
    super(props);

    this.state = {
      isDropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    const { isDropdownOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147838801.jpg?t=st=1696296802~exp=1696297402~hmac=1f4c2e35b92e5852639f9f476d0e28ee33e2cc55b6d8c353ba8ef923cef8b9f2" alt="Logo" className="logo" />
            YouTube
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown" onClick={this.toggleDropdown}>
              <a className="nav-link" href="#">
                Dropdown
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Option 1</li>
                  <li className="dropdown-item">Option 2</li>
                  <li className="dropdown-item">Option 3</li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}



export default Navbar;













//Function components props accessing----------->
// const Welcome = (props) => {
//   const [name, bio, age, address, role] = props;

//       return(
//             <div>
//               {name}, {bio}, {age}, {address}, {role}
//             </div>
//   );
// }
//export default Welcome;



//Class components props accessing----------->
// import {Component} from 'react';

// class Welcome extends Components {
//   render(){
//       const {name, bio, age, address, role} = this.props;

//       return(
//         <div>{name}, {bio}, {address}, {age}, {role}  </div>
//       )
//   }
// }

// export default Welcome;
