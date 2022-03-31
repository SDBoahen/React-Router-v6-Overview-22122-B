import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Routes , Route } from 'react-router-dom';

import App from './App';
import AppRouter from './AppRouter';
import AppWithRouterComponent from './AppWithRouterComponent'

import reportWebVitals from './reportWebVitals';
import Banner from './Banner';




//// App-Level With Separate Router Component - Configuration for React Router is in x.js

ReactDOM.render(

  <React.StrictMode>

    < AppWithRouterComponent />

  </React.StrictMode>
  
    ,
  
  document.getElementById('root')

);








//// App-Level Configuration for React Router - in App.js

// ReactDOM.render(

//   <React.StrictMode>

//     <Banner />
//     < AppRouter />

//   </React.StrictMode>
  
//     ,
  
//   document.getElementById('root')

// );











//// Highes Level Configuration for React Router - in index.js

// ReactDOM.render(

//   <React.StrictMode>

//     < Banner/>

//     {/* 📡 */}
//     < BrowserRouter >
//      < Routes >
//       {/* 🛤🛣🛤🛣🛤 */}

//       < Route path="/"  element={< App />}  /> {/* 🛤 */}

//       < Route path="/app"  element={ <>< App />< App />< App /></>}  /> {/* 🛤 */}

//       < Route path="/appAlot"  element={ 
//           <>
//             < App />
//             < App />
//             < App />
//             < App />
//             < App />
//             < App />
//             < App />
//             < App />
//             < App />
//           </>
//         }  />  {/* 🛤 */}

//       {/* 🛤🛣🛤🛣🛤 */}
//      </Routes > 

//     </ BrowserRouter>
//     {/* 🛰 */}


//   </React.StrictMode>
  
//     ,
  
//   document.getElementById('root')

// );













// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
