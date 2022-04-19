import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form, ButtonToolbar} from 'react-bootstrap';


export class EditCustomerModal extends Component{
    constructor(props){
     super(props);
     this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
    event.preventDefault(); 
    fetch("https://localhost:44325/api/Customers",{
        method:'PUT',
        header:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            CustomerId:event.target.CustomerId.value,
            CustName:event.target.CustName.value,    
            Address:event.target.Address.value
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
                            Edit Customer
                         </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="CustomerId">
                                    <Form.Label>CustomerId</Form.Label>
                                    <Form.Control type="text" name="CustomerId" required
                                    disabled defaultValue={this.props.custid} placeholder="CustomerId"/>
                                </Form.Group>

                                <Form.Group controlId="CustomerName">
                                    <Form.Label>CustomerName</Form.Label>
                                    <Form.Control type="text" name="CustomerName" required 
                                    defaultValue={this.props.custname} placeholder="CustomerName"/>
                                    </Form.Group>

                                <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="Address" required 
                                    defaultValue={this.props.address} placeholder="Address"/>

                                   
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">Update Customer</Button>
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