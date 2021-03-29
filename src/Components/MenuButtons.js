import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css'

const MenuButtons = (props) => {
    return (
        <div>
            <div>{
                props.state.buttons.map((btn, index) => {            
                    // const handleClick =(e) => {                        
                    //     // window.location.pathname = e.target.textContent
                    //     // console.log(window.location.pathname)
                    //     // return <Link to={'/'+e.target.textContent}/>   
                    //     // this.setState({...this.props.state, hidden : true})
                    //     props.showHide(true)                                     
                    // }    
            
                    return(
                        <div key = {index}>
                            <Link to={"/"+btn}>
                                <Button            
                                    className="MenuBtn"
                                    style={{backgroundColor:'transparent', color:'white', padding: '10px', borderColor: 'transparent'}}
                                    // onClick ={handleClick}
                                    >{btn}
                                </Button>
                            </Link>         
                        </div>
                    );
                })
            }</div>  
            <div className="dropdown">
                <Button 
                    style={{backgroundColor:'transparent', color:'white', padding: '10px', borderColor: 'transparent'}}
                    data-toggle="dropdown">Menu <span className="caret"/>
                </Button>
                <ul className="dropdown-menu">
                    {props.state.buttons1.map((btn, index)=>{
                        return(
                            <div key={index}>
                                {btn.type === "subMenu" ?
                                <li className="dropdown-submenu">
                                    <a href={"/"+btn.name}
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                        style={{backgroundColor:'transparent', color:'black', padding: '10px', borderColor: 'transparent'}}>{btn.name}
                                        <span className="caret"/>                                        
                                    </a>
                                    <ul className="dropdown-submenu-items">
                                        {btn.items.map((btn, index) => {
                                            return(
                                                <li key={index}>
                                                    <a href={"/"+btn.name}
                                                        style={{backgroundColor:'transparent', color:'black', marginLeft:'-10px', padding: '10px', borderColor: 'transparent'}}>{btn.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>                                                                         
                                </li>
                                : <li>
                                    <a href={"/"+btn.name}
                                        style={{backgroundColor:'transparent', color:'black', padding: '10px', borderColor: 'transparent'}}>{btn.name}
                                    </a>                                                                                     
                                </li>}
                            </div>                                                                                   
                        );
                    })}                              
                </ul>
            </div>               
        </div>
    );
}

export default MenuButtons;