import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HornedBeast from "./HornedBeast";


class SelectedBeast extends React.Component {


    render() {
        return (
            <div>
             <Button variant="danger" onClick={this.openModal}>open</Button>
                <Modal
                    show={false}
                    size={'md'}
                >
                    <Modal.Header >
                        <Modal.Title>Modal Title </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger"> Close </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}


export default SelectedBeast