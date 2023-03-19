import luiwalk from '../app/assets/img/a1.gif';
import luistand from '../app/assets/img/stand.gif';
import style from '../app/shared/StudentList.module.css';
import {createElement,useState,useEffect,useRef,React} from 'react';

const Fighter = (position) =>{
    const my_pos = position.prop;
    if (my_pos === 'stand'){
    return (
   
    
        <div className={style.arena}>
                
                <img id='demo' className={style.fighter} src={luistand}></img>
                
                
        </div>
        
      )
    }

    if (my_pos === 'walk'){
        return (
       
        
            <div className={style.arena}>
                    
                    
                    <img id='demo2' className={style.fighter} src={luiwalk}></img>
                    
            </div>
            
          )
        }
}

export default Fighter;