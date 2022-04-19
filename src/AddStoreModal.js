import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form, ButtonToolbar} from 'react-bootstrap';


export class AddStoreModal extends Component{
    constructor(props){
     super(props);
     this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
    event.preventDefault(); 
    fetch("https://localhost:44325/api/Stores",{
        method:'POST',
        header:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            StoreId:null,
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
                            Add Store
                         </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="StoreName">
                                    <Form.Label>StoreName</Form.Label>
                                    <Form.Control type="text" name="StoreName" required placeholder="StoreName"/>
                                    </Form.Group>
                                    <Form.Group controlId="StoreAddress">
                                    <Form.Label>StoreAddress</Form.Label>
                                    <Form.Control type="text" name="StoreAddress" required placeholder="StoreAddress"/>
                                   
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="success" type="submit">AddStore</Button>
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