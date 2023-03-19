
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
import lui from '../src/app/assets/img/a1.gif';
import luistand from '../src/app/assets/img/stand.gif';
import arena from '../src/app/assets/img/arena.png';


const test2 = (name) =>{
  
  return name;
}

const basicBtn = {
  border:'solid 2px purple',
  color: 'blue',
  backgroundColor:'yellow'
}

const test3 = 'this is a test';

const peaceOnEarth = () =>{
  console.log("peace on earth")
}

function App() {
  const [name, setName] = useState('Jeremy');
  const divEl = useRef(null);

  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`;

  const test1 = (mytest) => {
    console.log(divEl.current);
    divEl.current.style.backgroundColor = getRandomColor();
  }

  const noSetName = () =>{
    console.log('I never set a name');
  }
  let x = 0;
  useEffect(() => {
    setTimeout(peaceOnEarth,2000);
  },[name]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
}, [dispatch]);

  return (
   

    <div className={style.arena}>
            
            <img className={style.fighter} src={luistand}></img>
         
    </div> 
    
  )
}

export default App;
