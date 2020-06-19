import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import AdminModal from './AdminModal';
export class ModalTest extends Component{
    constructor(props){
        super(props);
        this.state = {addModalShow:false}

    }

    render(){
        let addModalClose = ()=> this.setState({addModalShow:false});
            return (
                    <div>


                        Modal Test
                                              
                       <AdminModal show={true}/>       
                              
    



                       
            




                        </div>
                        


                )
                        


                    

            }
}

export default ModalTest;

