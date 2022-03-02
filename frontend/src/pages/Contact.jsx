import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
      <>
    <Row className="ms-5 mt-3">
    <Col xs={4} className="d-flex">
        <div className="d-flex justify-content-start align-items-center">
            <img src="https://img.icons8.com/office/40/000000/iphone.png" alt="telefon" />
            <div>
                <div className="mx-3">
                    Telefon 
                </div> 
                <div className="mx-3">
                    34 377 00 00
                </div>
            </div>
        </div>
    </Col>
    <Col xs={4} className="d-flex">
        <div className="d-flex justify-content-center align-items-center">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt="Email" />
            <div>
                <div className="mx-3">
                    Email
                </div>
                <div className="mx-3">
                biuro@biblioteka.pl
                </div>
            </div>
        </div>
    </Col>

    <Col xs={3} className="d-flex">
        <div className="contact_info_item d-flex justify-content-start align-items-center">
            <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/50/000000/external-address-removals-company-inipagistudio-mixed-inipagistudio.png" alt="Adres" />
            <div className="contact_info_content">
                <div className="mx-3">
                    Adres
                </div>
                <div className="mx-3">
                Osiedle Bolesława Chrobrego 105, 60-681 Poznań
                </div>
            </div>
        </div>
    </Col>
</Row>
<Row className="mt-3">
    <div className="text-center">
        <h1 className="">Odwiedź nas</h1>
        <div className="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.2346949975704!2d16.91187911580511!3d52.45677687980238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470443d224a2b073%3A0xa813667f8f2f45ec!2sSzko%C5%82a%20Podstawowa%20nr%2017%20J.I%20Kraszewskiego!5e0!3m2!1spl!2spl!4v1646260606613!5m2!1spl!2spl" width="70%" height="500px"  loading="lazy" title="Google"></iframe>
        </div>
    </div>
</Row>
</>
  )
}

export default Contact