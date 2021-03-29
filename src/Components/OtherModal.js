import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import '../App.css'

const OtherModal = (props) => {
    return(
        <>
            <Modal show={props.show}>
                <Modal.Body><Button>Modal 2</Button></Modal.Body>
            </Modal>
        </>
    );
}
export default OtherModal