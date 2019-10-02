import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import './Que.css';
const Que = (props)=>{

    let dropDown ='backDownImage';
    if(props.show){
        dropDown='backBtnImage';
    }

    return (
        <div>
            <p className="App-intro">
                <button className={['QuestionBtn', dropDown].join(' ')}  onClick={props.clicked}>{props.question}</button>
            </p>
            <ToggleDisplay show={props.show}>
              {props.answer}
            </ToggleDisplay>
    
        </div>
    )
}


export default Que;