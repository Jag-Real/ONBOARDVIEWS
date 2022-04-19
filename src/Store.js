
import React, {Component} from 'react';
import {Table} from 'react-bootstrap'; 

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddStoreModal} from './AddStoreModal';
import {EditStoreModal} from './EditStoreModal';

export class Store extends Component{


    constructor(props){
        super(props);
        this.state={sto:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("https://localhost:44325/api/Stores") 
        .then(response=>response.json())
        .then(data=>{
            this.setState({sto:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteStore(stid){
        if(window.confirm('Are you sure you want to delete?')){
            fetch("https://localhost:44325/api/Stores/"+stid,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {sto, stid, stname, staddr}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
              <Table className='store-Table'  striped bordered hover size='sm'>
                  <thead>
                      <tr>
                             <th>StoreId</th>
                             <th>StoreName</th>
                             <th>StoreAddress</th>
                      </tr>
                       </thead>    
                       <tbody>
                           {sto.map(s=>
                           <tr key={s.StoreId}>
                               <td>{s.StoreId}</td>
                               <td>{s.StoreName}</td>
                               <td>{s.StoreAddress}</td>
                               <td>
            <ButtonToolbar>
                <Button className='editButton' variant="info"  
                onClick={()=>this.setState({editModalShow:true, stid:s.StoreId,stname:s.StoreName,staddr:s.StoreAddress})}>
                    Edit 
                </Button>

                   <Button className='deleteButton'  variant="danger"
                onClick={()=>this.deleteStore(s.StoreId)}>
                    Delete
                </Button>

                 <EditStoreModal show={this.state.editModalShow} 
                 onHide={editModalClose}
                stid={stid}
                stname={stname}
                staddr={staddr}/> 
            </ButtonToolbar>
            </td>

                           </tr>)}
                       </tbody>
              </Table>

              <ButtonToolbar>
                  <Button variant='success' onClick={()=>this.setState({addModalShow:true})}>Add Store</Button>
              
                <AddStoreModal show={this.state.addModalShow} onHide={addModalClose}/>
              
              </ButtonToolbar>

            

            </div>
        )
    }
}