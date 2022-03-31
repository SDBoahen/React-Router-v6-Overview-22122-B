import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom';

import SpinnyReactLogo from "./SpinnyReactLogo.js"

import OurRouter from './OurRouter';
import Banner from './Banner';
import { useEffect, useState } from 'react';
// import NavBar from './NavBar';


function AppWithRouterComponent() {

  const [ allStudents , setAllStudents ] = useState( [] )
    console.log( "State of AllStudents: " , allStudents )  //

  useEffect( ()=>{

    fetch(  "http://localhost:3388/students" )
    .then(  r => r.json()  )
    .then(  ( fetchedStudents ) => { 
      
      setAllStudents(fetchedStudents) 
    
    }  )

  } , [ ] )

  return (<>

      < Banner />

      < OurRouter studentsToMap={ allStudents } />

    </>);
}
export default AppWithRouterComponent;


