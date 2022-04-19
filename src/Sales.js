
import React, {Component} from 'react';
import {Table} from 'react-bootstrap'; 

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddSaleModal} from './AddSaleModal';
import {EditSaleModal} from './EditSaleModal';

export class Sales extends Component{


    constructor(props){
        super(props);
        this.state={sale:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("https://localhost:44325/api/Sales")
        .then(response=>response.json())
        .then(data=>{
            this.setState({sale:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteSale(saleid){
        if(window.confirm('Are you sure you want to delete?')){
            fetch("https://localhost:44325/api/Sales/"+saleid,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {sale, saleid, custid, prodid, stid, datesold}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
              <Table className='sale-Table'  striped bordered hover size='sm'>
                  <thead>
                      <tr>
                      <th>SaleId</th>
                      <th>ProductId</th>
                      <th>CustomerId</th>
                      <th>StoreId</th>
                      <th>DateSold</th>
                      </tr>
                      
                       </thead> 
                       <tbody>
                           {sale.map(sa=>
                           <tr key={sa.SaleId}>
                               <td>{sa.SaleId}</td>
                               <td>{sa.ProductId}</td>
                               <td>{sa.CustomerId}</td>
                               <td>{sa.StoreId}</td>
                               <td>{sa.DateSold}</td>
                               <td>
            <ButtonToolbar>
                <Button className='editButton' variant="primary"  
                onClick={()=>this.setState({editModalShow:true, saleid:sa.SaleId, datesold:sa.DateSold})}>
                    Edit 
                </Button>

                   <Button className='deleteButton'  variant="danger"
                onClick={()=>this.deleteSale(sa.SaleId)}>
                    Delete
                </Button>

                <EditSaleModal show={this.state.editModalShow}
                onHide={editModalClose}
                saleid={saleid}
                prodid={prodid}
                custid={custid}
                stid={stid}
                datesold={datesold}/> 
            </ButtonToolbar>
            </td>

                           </tr>)}
                       </tbody>
              </Table>

              <ButtonToolbar>
                  <Button variant='success' onClick={()=>this.setState({addModalShow:true})}>Add Sale</Button>
              
              <AddSaleModal show={this.state.addModalShow} onHide={addModalClose}/> 
              
              </ButtonToolbar>

            

            </div>
        )
    }
}