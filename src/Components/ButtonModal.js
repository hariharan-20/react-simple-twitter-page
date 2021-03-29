import {Modal, Button} from 'react-bootstrap'
import '../App.css'


const ButtonModal = (props) => {  
    // const [objModal, setObjModal] = useState()    

    const handleClose = () => {
        props.setShow(false);
    }

    const handleClick =(e) => {
        props.setShow(false)
        props.setShowOtherModal(true)
        // props.setBtnModalClick()
    }

    return (
        <>
            <Modal show={props.show} onHide={handleClose} animation={false}>
                <Modal.Body className ="btnModal">
                {props.btnClick && props.state.BtnModals.find(e => e.name === props.btnClick)?.items?.map((ele, index) => {
                    return <div  key={index}><Button className="btnModalBtn" onClick={handleClick}>{ele.name}</Button></div>
                })}
                </Modal.Body>                                
            </Modal>                     
        </>
    );
}

export default ButtonModal