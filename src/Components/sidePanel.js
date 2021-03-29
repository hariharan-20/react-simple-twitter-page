import React from 'react'

import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuButtons from './MenuButtons'

import Feed from './Feed'
import CardView from './Card';
import '../App.css'

const SidePanel = (props) => {         
    return (
        <div>            
            
        </div>                        
        );
    }
        
export default SidePanel;

    // const buttons = [
        //     {name: 'Home', Func: () => {console.log('Home')}},
    //     {name: 'Explorer', Func: () => {console.log('Explorer')}},
    //     {name: 'Messages', Func: () => {console.log('Messages')}},
    //     {name: 'Bookmarks', Func: () => {console.log('Bookmarks')}},
    //     {name: 'List', Func: () => {console.log('List')}},
    //     {name: 'Profile', Func: () => {console.log('Profile')}},
    //     {name: 'More', Func: () => {console.log('More')}}
    // ]
    
    
    // const btnList = (buttons.map((btn, index) => {    
    //     const handleClick =(e) => {
    //             console.log(e)
    //         }    
        
    //         return(
    //                 <div key = {index}><Button            
    //                 className="MenuBtn"
    //                 style={{backgroundColor:'transparent', color:'white', padding: '10px', borderColor: 'transparent'}}
    //                 onClick ={handleClick}>{btn}</Button></div>
    //             );
    //         }))
        
    // return btnList    