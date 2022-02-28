import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import EditBorrow from './EditBorrow';

const BorrowRow = ({borrow}) => {
    const [show,setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
    <>
    <tr>
  <td>{borrow?.book?.title}</td>
  <td>{borrow?.reader}</td>
  <td>{borrow?.borrowDate}</td>
  <td>{borrow?.deadline}</td>
  <td>{borrow?.status}</td>
  <td>
  <a onClick={handleShow} data-toggle="modal" ><i className="material-icons" style={{color:"#F9DC5C",cursor:"pointer"}} data-toggle="tooltip" title="subcategory.edit">&#xE254;</i></a>
  </td>
</tr>  


<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            Edytuj
            </Modal.Header>
            <Modal.Body>
                <EditBorrow/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">
                Zamknij
                </Button>
            </Modal.Footer>
        </Modal>
</>
  )
}

export default BorrowRow