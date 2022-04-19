
import React, {Component} from 'react';
import {Table} from 'react-bootstrap'; 

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddCustomerModal} from './AddCustomerModal';
import {EditCustomerModal} from './EditCustomerModal';

export class Customer extends Component{


    constructor(props){
        super(props);
        this.state={cust:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("https://localhost:44325/api/Customers")
        .then(response=>response.json())
        .then(data=>{
            this.setState({cust:data});
        });
    }

    // componentDidMount(){
    //     this.refreshList();
    // }

    //  componentDidUpdate(){
    //  // this.refreshList();
    // }

    deleteCust(custid){
        if(window.confirm('Are you sure you want to delete?')){
            fetch("https://localhost:44325/api/Customers/"+custid,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {cust, custname, custid, address}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
              <Table className='Dep-Table'  striped bordered hover size='sm'>
                  <thead>
                      <tr>
                      <th>CustomerId</th>
                      <th>CustName</th>
                      <th>Address</th>
                      </tr>
                      
                       </thead> 
                       <tbody>
                           {cust.map(c=>
                           <tr key={c.CustomerId}>
                               <td>{c.CustomerId}</td>
                               <td>{c.CustName}</td>
                               <td>{c.Address}</td>
                               <td>
            <ButtonToolbar>
                <Button className='editButton' variant="primary"  
                onClick={()=>this.setState({editModalShow:true, custid:c.CustomerId,custname:c.CustName,address:c.Address})}>
                    Edit 
                </Button>

                   <Button className='deleteButton'  variant="danger"
                onClick={()=>this.deleteCust(c.CustomerId)}>
                    Delete
                </Button>

                <EditCustomerModal show={this.state.editModalShow} 
                onHide={editModalClose}
                custid={custid}
                custname={custname}
                address={address}/>
            </ButtonToolbar>
            </td>

                           </tr>)}
                       </tbody>
              </Table>

              <ButtonToolbar>
                  <Button variant='success' onClick={()=>this.setState({addModalShow:true})}>Add Customer</Button>
              
                <AddCustomerModal show={this.state.addModalShow} onHide={addModalClose}/>
              
              </ButtonToolbar>

            

            </div>
        )
    }
}