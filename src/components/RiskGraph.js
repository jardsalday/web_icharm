import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


export default class RiskGraph extends Component{
    constructor(props){
        super(props);
        this.state = {
            systolic:[],
            risk:{}

        }

    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/risk/').then(res=>{const array = res.data;this.setState({risk:{
            labels:array.map(test=>test.created_at),
        datasets:[
                {
                    label:"Cardiovascular Disease Risk",
                    borderColor: "rgb(229, 115, 115)",
                    fill:true,
                    lineTension:0,
                    backgroundColor:"rgba(229, 115, 115,0.2)",
                  data:array.map(test=>test.risk_proba)
                }]

      }
    
    
    });});
        const array = this.state.systolic;
      
    }

    render(){
        return (
        
            <div className="graph2 col-lg-12  col-md-6 col-sm-12">
                <label className="red-text text-lighten-2">CVD RISK:</label>
                <Line
                data={this.state.risk}
                height='700px'
                width='1000px'
                option={{
                    maintainAspectRatio:false,bezierCurve:true
                }}
                />
                </div>
               
        


          

        );


    }

}