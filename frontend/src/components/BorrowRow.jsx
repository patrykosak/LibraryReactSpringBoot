import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

const BorrowRow = () => {
    const [show,setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
    <>
    <tr>
  <td>tytuł</td>
  <td>Uczeń</td>
  <td>Data</td>
  <td>Termin</td>
  <td>Status</td>
  <td>
  <a onClick={handleShow} data-toggle="modal" ><i className="material-icons" style={{color:"#F9DC5C",cursor:"pointer"}} data-toggle="tooltip" title="subcategory.edit">&#xE254;</i></a>
  </td>
</tr>  


<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            Edytuj
            </Modal.Header>
            <Modal.Body>
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