import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import axios from 'axios'

import ButtonModal from './ButtonModal'
import OtherModal from './OtherModal'

import '../App.css'

const Home = (props) => {
    const [tweets, setTweets] = React.useState()    
    const [showBtnModal, setShowBtnModal] = React.useState(false)
    const [showOtherModal, setShowOtherModal] = React.useState(false)
    const [btnClick, setBtnClick] = React.useState()
    const [btnModalClick, setBtnModalClick] = React.useState()

    // const handleClose = () => setshowBtnModal(false);

    React.useEffect(() => {        
        (async() => {
            await axios('https://api.jsonapi.co/rest/v1/user/list').then((res)=>{                
                setTweets(res.data.data.users)
            }).catch((err) => {
                console.log(err)
            })
        })();
    }, [])

    const handleClick =(e) => {        
        const btnName = e.target.classList[1].split('-')[1]        
        setShowBtnModal(true)
        setBtnClick(btnName)
    }

    return (
        <> 
        <div><ButtonModal show={showBtnModal} setShow={setShowBtnModal} btnClick={btnClick} state={props.state} setShowOtherModal={setShowOtherModal} setBtnModalClick = {setBtnModalClick}/></div>
        <div><OtherModal show={showOtherModal} setShow={setShowOtherModal} state={props.state} btnClick={btnModalClick}/></div>      
        {tweets?.map((tweet, i) => {
            return(
                <div key ={i}>
                    <div className="Tweets">            
                        <Row key={i}>
                            <Col 
                                style={{width:'fitContent'}} md={2}>
                                <img alt="no img"className="tweetProfImg" src={tweet.image.url}></img>
                            </Col>
                            <Col 
                            style= {{padding: 0}} md={8}>
                                <div className="tweetContent">
                                    <div>
                                        <span><a className="TweetProfNameLink" href={"/"+tweet.name}>{tweet.name}</a>
                                            <span className="profNameLabel">{" @"+tweet.name+" · "}</span>
                                        </span>
                                    </div>
                                    <div>{tweet.about}</div>
                                    <div className="bottomBtns">
                                        {props.state.glyphicons.map((gly, index) => {
                                            return <Button key={index} className={`glyphicon glyphicon-${gly}`} onClick={handleClick}/>                                            
                                        })}
                                    </div>                                                                                                                   
                                </div>
                            </Col>                    
                        </Row>                    
                    </div>
                    <div className="hrHorizontal"/>
                </div>
            );
        })}                    
        </>
    );
}

export default Home;