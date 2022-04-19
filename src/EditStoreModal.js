import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form, ButtonToolbar} from 'react-bootstrap';


export class EditStoreModal extends Component{
    constructor(props){
     super(props);
     this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
    event.preventDefault(); 
    fetch("https://localhost:44325/api/Stores",{
        method:'PUT',
        header:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            StoreId:event.target.StoreId.value,
            StoreName:event.target.StoreName.value,    
            StoreAddress:event.target.StoreAddress.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Failed');
    })

}

render(){
    return (
        <div className="container">

            <Modal
                {...this.props}
                size="lg" aria-labelledby="contained-model-tittle-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-model-tittle-vcenter">
                            Edit Store
                         </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="StoreId">
                                    <Form.Label>StoreId</Form.Label>
                                    <Form.Control type="text" name="StoreId" required
                                    disabled defaultValue={this.props.stid} placeholder="StoreId"/>
                                </Form.Group>

                                <Form.Group controlId="StoreName">
                                    <Form.Label>StoreName</Form.Label>
                                    <Form.Control type="text" name="StoreName" required 
                                    defaultValue={this.props.stname} placeholder="StoreName"/>
                                    </Form.Group>

                                <Form.Group controlId="StoreAddress">
                                    <Form.Label>StoreAddress</Form.Label>
                                    <Form.Control type="text" name="StoreAddress" required 
                                    defaultValue={this.props.staddr} placeholder="StoreAddress"/>

                                   
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">Update Store</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>

                 
            </Modal>
        </div>
    )
}
}