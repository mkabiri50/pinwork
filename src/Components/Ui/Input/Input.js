import React from 'react';
import classes from './Input.css';
const Input = (props) => {
    let inputElement = null;
    // const inputClasses = [classes.InputElement];
    // if (props.invalid && props.shouldValidation && props.touched){
    //     inputClasses.push(classes.Invalid)
    // }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={['InputElement', props.style].join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className='InputElement'
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (<select
                className='InputElement'
                value={props.value}
                onChange={props.changed} >
                {props.elementConfig.options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.displayValue}
                    </option>
                ))}

            </select>
            );
            break;
        default:
            inputElement = <input
                className='InputElement'
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;
// import React from 'react';

// const MyInput = (props) => (
//    <input
//    style={[styles.Input,props.style]}
//    {...props} />
// )
// const styles={
//     Input:{
//         width:'100%',
//         borderColor:'#bbb',
//         borderWidth:1,
//         backgroundColor:'#eee',
//         padding:5,
//         margin:8
//     }
// }
// export default MyInput