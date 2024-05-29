import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import React , { useState } from 'react';

function App() {
  const[dark, setDark] = useState('light');
  const[green, setGreen] = useState('light');
  const[blue, setBlue] = useState('light');
  const[grey, setGrey] = useState('light');


  const showDark =()=> {
    if(dark === 'light'){
      setDark('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setDark('light');
      document.body.style.backgroundColor = 'white';
    }
  } // This is for Dark mode

  const showGreen =()=> {
    if(green === 'light'){
      setDark('green');
      document.body.style.backgroundColor = 'green';
    }
    else{
      setDark('light');
      document.body.style.backgroundColor = 'white';
    }
  } // This is for Green mode

  const showBlue =()=> {
    if(blue === 'light'){
      setDark('blue');
      document.body.style.backgroundColor = 'blue';
    }
    else{
      setDark('light');
      document.body.style.backgroundColor = 'white';
    }
  } // This is for Blue mode

  const showGrey =()=> {
    if(grey === 'light'){
      setDark('grey');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setDark('light');
      document.body.style.backgroundColor = 'white';
    }
  } // This is for Grey mode

  return (
    <>
    <Navbar name ='Any Heading Here' dark = {dark} showDark = {showDark} green = {green} showGreen = {showGreen} blue = {blue} showBlue = {showBlue} grey = {grey} showGrey = {showGrey}/>
    <div className="coantainer my-5">
       <MainSection/>
    </div>
   
    </>
  );
}

export default App;
