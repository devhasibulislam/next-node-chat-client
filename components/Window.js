import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Window = (props) => {
    return (
        <section>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.child}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-light" className='shadow text-black' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
export default Window;