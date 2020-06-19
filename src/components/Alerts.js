import React,{  Component,Fragment} from 'react';      
import {withAlert,useAlert} from 'react-alert';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class Alerts extends Component{
    static propTypes={
        error:PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        const {error}=this.props;
        if(error!==prevProps.error){
            if(error.msg.patientprofile.name){
            alert("Name may not be blank or Name taken");
            }
            if(error.msg.patientprofile.name){
                alert("Name may not be blank or Name taken");
                }
                if(error.msg.patientprofile.birthdate){
                    alert("Name may not be blank or Name taken");
                    }
                    if(error.msg.patientprofile.sex){
                        alert("Name may not be blank or Name taken");
                        }
            
                        if(error.msg.patientprofile.height){
                            alert("Name may not be blank or Name taken");
                            }
            
                            if(error.msg.patientprofile.address){
                                alert("Name may not be blank or Name taken");
                                }
            
                                if(error.msg.patientprofile.is_dia){
                                    alert("Name may not be blank or Name taken");
                                    }
            
                                    if(error.msg.patientprofile.name){
                                        alert("Name may not be blank or Name taken");
                                        }
                                    
        }
          
    }

    render(){
        return <Fragment/>;
    }

}
const mapStateToProps=state=>({
    error:state.errors

});

export default connect(mapStateToProps)(withAlert()(Alerts));