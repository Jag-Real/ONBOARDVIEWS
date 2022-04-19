import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form, ButtonToolbar} from 'react-bootstrap';


export class EditProductModal extends Component{
    constructor(props){
     super(props);
     this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
    event.preventDefault(); 
    fetch("https://localhost:44325/api/Products",{
        method:'PUT',
        header:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            ProductId:event.target.ProductId.value,
            ProductName:event.target.ProductName.value,    
            Price:event.target.Price.value
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
                            Edit Product
                         </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="ProductId">
                                    <Form.Label>ProductId</Form.Label>
                                    <Form.Control type="text" name="ProductId" required
                                    disabled defaultValue={this.props.prodid} placeholder="ProductId"/>
                                </Form.Group>

                                <Form.Group controlId="ProductName">
                                    <Form.Label>ProductName</Form.Label>
                                    <Form.Control type="text" name="ProductName" required 
                                    defaultValue={this.props.prodname} placeholder="ProductName"/>
                                    </Form.Group>

                                <Form.Group controlId="Price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" name="Price" required 
                                    defaultValue={this.props.price} placeholder="Price"/>

                                   
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">Update Product</Button>
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