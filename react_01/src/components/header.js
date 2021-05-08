import classes from '*.module.css';
import React , { Component }from 'react';
import '../css/styles.css'

// const getYear = () => {
//     const newDate = new Date();
//     return newDate.getYear();
// }

// const user = {
//     name:'Francis',
//     lastBane:'Jones',
//     age:16
// }



const Header = (props) => {
    return (
        <header  >
            <div className={classes.logo} >Logo</div>
            <input type="text" 
            onChange={props.keywords}/>
        </header>
        
    )
    
    }



export default  Header;
