import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {


    render() {
        return (
            <div>
                <Modal show={this.props.showModal}
                    onHide={this.props.handleClose}
                    size="lg"
                    style={{ textAlign: 'center' }}

                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selected.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.selected.image_url} alt={this.props.selected.title} title={this.props.selected.title}
                            style={{ width: '600px', height: '600px' }}
                        />

                        <p>{this.props.selected.description}</p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={this.props.handleClose}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}


export default SelectedBeast