
import React, {Component} from 'react';
import {Table} from 'react-bootstrap'; 

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddProductModal} from './AddProductModal';
import {EditProductModal} from './EditProductModal';

export class Product extends Component{


    constructor(props){
        super(props);
        this.state={prod:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("https://localhost:44325/api/Products") 
        .then(response=>response.json())
        .then(data=>{
            this.setState({prod:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteProduct(prodid){
        if(window.confirm('Are you sure you want to delete?')){
            fetch("https://localhost:44325/api/Products/"+prodid,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {prod, prodid, prodname, price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
              <Table className='Prod-Table'  striped bordered hover size='sm'>
                  <thead>
                      <tr>
                             <th>ProductId</th>
                             <th>ProductName</th>
                             <th>Price</th>
                      </tr>
                       </thead>    
                       <tbody>
                           {prod.map(p=>
                           <tr key={p.ProductId}>
                               <td>{p.ProductId}</td>
                               <td>{p.ProductName}</td>
                               <td>{p.Price}</td>
                               <td>
            <ButtonToolbar>
                <Button className='editButton' variant="info"  
                onClick={()=>this.setState({editModalShow:true, prodid:p.ProductId,prodname:p.ProductName,price:p.Price})}>
                    Edit 
                </Button>

                   <Button className='deleteButton'  variant="danger"
                onClick={()=>this.deleteProduct(p.ProductId)}>
                    Delete
                </Button>

                 <EditProductModal show={this.state.editModalShow}
                onHide={editModalClose}
                prodid={prodid}
                prodname={prodname}
                price={price}/>
            </ButtonToolbar>
            </td>

                           </tr>)}
                       </tbody>
              </Table>

              <ButtonToolbar>
                  <Button variant='success' onClick={()=>this.setState({addModalShow:true})}>Add Product</Button>
              
                 <AddProductModal show={this.state.addModalShow} onHide={addModalClose}/> 
              
              </ButtonToolbar>

            

            </div>
        )
    }
}