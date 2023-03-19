
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import NucampLogo from './app/assets/img/logo.png';
import CampsitesList from './features/campsites/CampsitesList';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import {createElement,useState,useEffect,useRef} from 'react';
import {CreatedElement} from './components/Misc';
import {CreatedElement2} from './components/Misc';
import style from '../src/app/shared/StudentList.module.css';
import luiwalk from '../src/app/assets/img/a1.gif';
import luistand from '../src/app/assets/img/stand.gif';
import arena from '../src/app/assets/img/arena.png';
import React from 'react';
import Fighter from '../src/utils/Fighter';





function App() {
  const [position,setPosition] = useState('stand');
  const Example = () => { 
    return React.createElement("h1", { style: { color: "black" } }, "Hello World"); 
  };


function Greeting() {
  return createElement(
    'img',
    { className: 'fighter' },
    { src: {luiwalk} }
    
  );
}
 
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`;


const keydownHandler = (e) => {
  if(e.key === 'Enter'){
    console.log('im in');
    
    setPosition('walk');
  }
  
};
  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
  }, []);
  
  return (
   
    
    
    <Fighter prop={position}/>
    
  )
}

export default App;
