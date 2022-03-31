import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes , Route } from 'react-router-dom';

import SpinnyReactLogo from "./SpinnyReactLogo.js"


function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        < Route path="/" element={ < SpinnyReactLogo /> } />

        < Route path="/appAlot"  element={ 
          <>
            < SpinnyReactLogo />
            < SpinnyReactLogo />
            < SpinnyReactLogo />
            < SpinnyReactLogo />
            < SpinnyReactLogo />
            < SpinnyReactLogo />
            < SpinnyReactLogo />
            < SpinnyReactLogo />
            < SpinnyReactLogo />
          </>
        }  />  {/* 🛤 */}

      {/* 🛤🛣🛤🛣🛤 */}
     


      </Routes>

    </BrowserRouter>
  );
}
export default AppRouter;


