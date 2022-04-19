import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form, ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';


export class AddCustomerModal extends Component{
    constructor(props){
     super(props);
     this.handleSubmit=this.handleSubmit.bind(this);
}

// handleSubmit(event){
//     event.preventDefault(); 
//     fetch("https://localhost:44325/api/Customers",{
//         method:'POST',
//         header:{
//             'Accept':'application/json',
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             CustomerId:null,
//             CustName:event.target.CustName.value,    
//             Address:event.target.Address.value
//         })
//     })
//     .then(res=>res.json())
//     .then((result)=>{
//         alert(result);
//     },
//     (error)=>{
//         alert('Failed');
//     })

// }


handleSubmit(event){
//     //event.preventDefault();
     console.log("handleM");
//         //setDisplay(false);
//         // console.log(event.target.CustomerName.value, event.target.Address.value);
//         // axios.post('https://localhost:44325/api/Customers', {
//         //     Name: event.target.CustName.value,
//         //     Address: event.target.Address.value,
//         // }).then((res) => {
//         //     console.log(res.status);
//         //     window.location.reload(false);
//         // })
//         //     .catch((err) => {
//         //         console.log(err);
//         //     })

 }
render(){
    return (
        <div className="container">

            <Modal
                {...this.props}
                size="lg" aria-labelledby="contained-model-tittle-vcenter" centered> 
                      
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-model-tittle-vcenter">
                            Add Customer
                         </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col sm={6}>
                        
                            <Form onSubmit={()=>this.handleSubmit()}>
                                <Form.Group controlId="CustomerName">
                                    <Form.Label>CustomerName</Form.Label>
                                    <Form.Control type="text" name="CustomerName" required placeholder="CustomerName"/>
                                    </Form.Group>
                                    <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="Address" required placeholder="Address"/>
                                   
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="success" type="submit">AddCustomer</Button>
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