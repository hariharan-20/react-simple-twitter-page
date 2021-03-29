import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'
// import axios from 'axios'

import Home from './Components/Home'
import List from './Components/List'
import MenuButtons from './Components/MenuButtons'
// import RetweetBtnModal from './Components/Modal'

export default class App extends React.Component {
  constructor(props){
    super(props)   
    this.state = {
      glyphicons: ["comment", 'retweet', 'heart-empty', 'share-alt'],
      // retweetBtn:['Retweet', 'Quote Tweet'],
      buttons:['Home', 'Explorer', 'Messages', 'Bookmarks', 'List', 'Profile', 'More'],
      buttons1: [
        {type: 'menu', name: 'Home'},
        {type: 'menu', name: 'Explorer'},
        {type: 'subMenu', name: 'Messages',items:[
          {type: 'menu', name: 'Bookmarks'},
          {type: 'menu', name: 'List'},
          {type: 'menu', name: 'Profile'},
          {type: 'menu', name: 'More'}]},
        {type: 'subMenu', name: 'Others', items: [
          {type: 'menu', name: 'Bookmarks'},
          {type: 'menu', name: 'List'},
          {type: 'menu', name: 'Profile'},
          {type: 'menu', name: 'More'}
        ]}
      ],
      BtnModals:[
        {name: 'comment', type:'modal'},
        {name: 'retweet', type: 'btnModal', items:[
          {name: 'retweet'},
          {name: 'quoteRetweet', type: 'modal'}
        ]},
        {name: 'heart', type: 'modal'},
        {name: 'share', type: 'btnModa', items:[
          {name: 'Send Via Direct Message', type: 'modal'},
          {name: 'Add tweets to Bookmarks', type: 'modal'},
          {name: 'Copy link to tweet'}
        ]}
      ]
    }
    
    // this.showHideCard = this.showHideCard.bind(this)
  }
  // componentDidMount(){
  //   axios('https://api.jsonapi.co/rest/v1/user/list').then((res)=>{
  //         this.setState({data: res.data.data})                        
  //     }).catch((err)=>{
  //         console.log(err)
  //     })
  // }

  // showHideCard = (bool) => {
  //     if(bool === true){
  //       this.setState({show: bool})
  //     }else{
  //       this.setState({show: false})
  //     }
  // }

  render(){    
    return (
      <div className="App">
        <BrowserRouter>
            <Container>
                <Row>                    
                    <Col md={3}><Route component={() => <MenuButtons state ={this.state}/>}/></Col>  
                    <div className="hrVertical"></div>                                      
                    <Col md={6}>                      
                      <div>
                        <Switch>
                            <Route path ="/Home" component={() => <Home state={this.state}/>} exact={true}/>                            
                            <Route path="/List" component={() => <List data={this.state.data}/>}/>
                            {/* <Route path="/retweetBtnModal" component={() => <RetweetBtnModal buttons={this.state.retweetBtn}/>}/> */}
                        </Switch>                    
                      </div>
                    </Col>                                     
                </Row>
            </Container>
            </BrowserRouter>
      </div>
    );
  }
}