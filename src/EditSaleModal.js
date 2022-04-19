import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form, ButtonToolbar} from 'react-bootstrap';


export class EditSaleModal extends Component{
    constructor(props){
     super(props);
     this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
    event.preventDefault(); 
    fetch("https://localhost:44325/api/Sales",{
        method:'PUT',
        header:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            SaleId:null,  
            ProductId:event.target.ProductId.value,  
            CustomerId:event.target.CustomerId.value,
            StoreId:event.target.StoreId.value,
            DateSold:event.target.DateSold.value
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
                            Edit Sale
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

                                <Form.Group controlId="CustomerId">
                                    <Form.Label>CustomerId</Form.Label>
                                    <Form.Control type="text" name="CustomerId" required
                                    disabled defaultValue={this.props.custid} placeholder="CustomerId"/>
                                   
                                </Form.Group>

                                <Form.Group controlId="StoreId">
                                    <Form.Label>StoreId</Form.Label>
                                    <Form.Control type="text" name="StoreId" required placeholder="StoreId"/>
                                   
                                </Form.Group>

                                <Form.Group controlId="DateSold">
                                    <Form.Label>DateSold</Form.Label>
                                    <Form.Control type="text" name="DateSold" required placeholder="DateSold"/>
                                    </Form.Group>
                                   

                                <Form.Group>
                                    <Button variant="primary" type="submit">Update Sale</Button>
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