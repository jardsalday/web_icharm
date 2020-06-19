import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


export default class Graph extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:"",
            systolic:[],
            sys:{},
            dia:{},
            weight:{},
            cholesterol:{},
            truesys:{},
            risk:{},
            all:{},
            pseudo:{
                labels:['1/1/1','11/11/11','11/11/11','11/11/11','11/11/11','11/11/11'],
            datasets:[
                    {
                        label:"CVD Risk",
                        borderColor: "rgba(124, 179, 66)",
                        fill:true,
                        lineTension:0.5,
                        backgroundColor:"rgba(124, 179, 66,0.2)",
                      data:['100','200','150','100','200','180']
                    }]
                }
        }

    }
    componentDidMount(){
        
        axios.get(`http://127.0.0.1:8000/api/specmeasure/?id_number=${this.state.id}`).then(res=>{console.log(res.data)})
//         axios.all([axios.get('http://127.0.0.1:8000/api/risk/'),
//            axios.get(`http://127.0.0.1:8000/api/specmeasure/?id_number=${id}`)])
//      .then(axios.spread((firstResponse, secondResponse) => {  
//          const risk = firstResponse.data;
//          console.log(secondResponse.data)
//          const measure2 = secondResponse.data;
//          console.log(measure);
//         const measure = measure2.map(function(test1){return{systolic:test1.systolic,diastolic:test1.diastolic,weight:test1.weight,
//             cholesterol:test1.cholesterol}});
        
//          this.setState({risk:{
//             labels:risk.map(test=>test.created_at),
//         datasets:[
//                 {
//                     label:"CVD Risk",
//                     borderColor: "rgb(229, 115, 115)",
//                     fill:true,
//                     lineTension:0,
//                     backgroundColor:"rgba(229, 115, 115,0.2)",
//                   data:risk.map(test=>test.risk_proba)
//                 }]

//       },
//       all:{
//                         labels:[measure.map(test=>test.created_at)],
//                     datasets:[
                  
//                             {
//                                 label:"Systolic Pressure",
//                                 borderColor: "rgba(0, 200, 0)",  
//                                 lineTension:0,
//                                 fill:false,
//                                 data:measure.map(test=>test.systolic)
//                             },
//                             {
//                                 label:"Diastolic Pressure",
//                                 borderColor: "rgba(0,0,222)",
//                                 lineTension:0.5,
//                                 fill:false,
//                                 data:measure.map(test=>test.diastolic)
//                             },
//                             {
//                                 label:"BMI/Weight",
//                                 borderColor: "rgba(255, 0, 255)",
//                                 lineTension:0.9,
//                                 fill:false,
//                                 data:measure.map(test=>test.weight)
//                             },
//                             {
//                                 label:"Cholesterol Level",
//                                 borderColor: "rgba(200, 200, 0)",
//                                 lineTension:0.8,
//                                 fill:false,
//                                 data:measure.map(test=>test.cholesterol)
//                             }
//                         ]
//                     }
//                 ,
//                 sys:{
//                     labels:measure.map(test=>test.created_at),
//                 datasets:[
//                         {
//                             label:"Systolic Pressure",
//                             borderColor: "#66bb6a",
//                             lineTension:0.5,
//                             data:measure.map(test=>test.systolic)
//                         }]
        
//               },
//               dia:{
//                 labels:measure.map(test=>test.created_at),
//             datasets:[
//                     {
//                         label:"Diastolic Pressure",
//                         borderColor: "#2196f3",
//                         fill:true,
//                         lineTension:0.5,
//                         backgroundColor:"rgba(124, 179, 66,0.2)",
//                         data:measure.map(test=>test.diastolic)
//                     }]
        
//           },
//           weight:{
//             labels:measure.map(test=>test.created_at),
//         datasets:[
//                 {
//                     label:"Weight",
//                     borderColor: "#ffb74d",
//                     fill:true,
//                     lineTension:0.5,            
//                     backgroundColor:"rgba(255, 183, 77,0.2)",
//                     data:measure.map(test=>test.weight)
//                 }]
        
//         },
        
//         cholesterol:{
//             labels:measure.map(test=>test.created_at),
//         datasets:[
//                 {
//                     label:"Cholesterol Level",
//                     borderColor: "#ffee58",
//                     fill:true,
//                     lineTension:0.5,
//                     backgroundColor:"rgba(200, 200, 0,0.2)",
//                     data:measure.map(test=>test.cholesterol)
//                 }]
        
//         }
    
    
//     });
//      }))
//      .catch(error => console.log(error));
        
//     //     axios.get('http://127.0.0.1:8000/api/risk/').then(res=>{ const array = res.data;this.setState({risk:{
//     //         labels:array.map(test=>test.created_at),
//     //     datasets:[
//     //             {
//     //                 label:"CVD Risk",
//     //                 borderColor: "rgb(229, 115, 115)",
//     //                 fill:true,
//     //                 lineTension:0.5,
//     //                 backgroundColor:"rgba(229, 115, 115,0.2)",
//     //               data:array.map(test=>test.risk_proba)
//     //             }]

//     //   }
    
    
//     // // });});
// //         axios.get('http://127.0.0.1:8000/api/measurement/').then(res=>{const array = res.data;this.setState({
// //             all:{
// //                 labels:array.map(test=>test.created_at),
// //             datasets:[
// //                     {
// //                         label:"Systolic Pressure",
// //                         borderColor: "rgba(124, 179, 66)",
// //                         lineTension:0.5,
// //                         data:array.map(test=>test.systolic)
// //                     },
// //                     {
// //                         label:"Diastolic Pressure",
// //                         borderColor: "rgba(124, 179, 66)",
// //                         lineTension:0.5,
// //                         data:array.map(test=>test.diastolic)
// //                     },
// //                     {
// //                         label:"Weight Pressure",
// //                         borderColor: "rgba(124, 179, 66)",
// //                         lineTension:0.5,
// //                         data:array.map(test=>test.weight)
// //                     },
// //                     {
// //                         label:"Cholesterol Pressure",
// //                         borderColor: "rgba(124, 179, 66)",
// //                         lineTension:0.5,
// //                         data:array.map(test=>test.cholesterol)
// //                     }
// //                 ]
// //             }
// //         ,
// //         sys:{
// //             labels:array.map(test=>test.created_at),
// //         datasets:[
// //                 {
// //                     label:"Systolic Pressure",
// //                     borderColor: "rgba(124, 179, 66)",
// //                     lineTension:0.5,
// //                     data:array.map(test=>test.systolic)
// //                 }]

// //       },
// //       dia:{
// //         labels:array.map(test=>test.created_at),
// //     datasets:[
// //             {
// //                 label:"Diastolic Pressure",
// //                 borderColor: "rgba(124, 179, 66)",
// //                 fill:true,
// //                 lineTension:0.5,
// //                 backgroundColor:"rgba(124, 179, 66,0.2)",
// //                 data:array.map(test=>test.diastolic)
// //             }]

// //   },
// //   weight:{
// //     labels:array.map(test=>test.created_at),
// // datasets:[
// //         {
// //             label:"Weight",
// //             borderColor: "rgba(124, 179, 66)",
// //             fill:true,
// //             lineTension:0.5,            
// //             backgroundColor:"rgba(124, 179, 66,0.2)",
// //             data:array.map(test=>test.weight)
// //         }]

// // },

// // cholesterol:{
// //     labels:array.map(test=>test.created_at),
// // datasets:[
// //         {
// //             label:"Cholesterol Level",
// //             borderColor: "rgba(124, 179, 66)",
// //             fill:true,
// //             lineTension:0.5,
// //             backgroundColor:"rgba(124, 179, 66,0.2)",
// //             data:[{x:array.map(test=>test.cholesterol),y:array.map(test=>test.cholesterol)} ]
// //         }]

// // }
    
    
// //     });});
//         const array = this.state.systolic;
      
    }

    render(){
       
        return (
          <div className="backgroundgraph " id="canvas">
           {this.props.measure}
            <div className="graph1 col-lg-5 col-sm-6 col-md-3">
            <label><h6 className="green-text text-lighten-1">SYSTOLIC</h6></label>
                <Line option={{
                    responsive:false
                }}
                data={this.state.sys}
                height='500px'
                width='1100px'
                />
                </div>
                <div className="graph1 col-lg-5 col-sm-6 col-md-3">
                <label><h6 className="blue-text ">DIASTOLIC</h6></label>
                <Line option={{
                    responsive:false
                }}
                data={this.state.dia}
                height='500px'
                width='1000px'
                /></div>
                <div className="graph1 col-lg-5 col-sm-6 col-md-6">
                <label><h6 className="orange-text text-lighten-2">BMI/WEIGHT</h6></label>
                 <Line option={{
                    responsive:false
                }}
                data={this.state.weight}
                height='500px'
                width='1000px'
                />
                </div>
                <div className="graph1 col-lg-5 col-md-3 col-sm-6">
                <label><h6 className="yellow-text lighten-3">CHOLESTEROL</h6></label>
                <Line option={{
                    responsive:false
                }}
                data={this.state.cholesterol}
                height='500px'
                width='1000px'
                />
                </div>
                <div className="all col-lg-5 col-sm-6 col-md-12">
           <label><h6>RISK FACTORS</h6></label>
           <Line option={{
               responsive:false
           }}
           data={this.state.all }
           height='500px'
           width='1000px'
           />
           </div>       
           <div className="all col-lg-5 col-sm-6 col-md-12">
           <label><h6>CVD RISK:</h6></label>
           <Line option={{
               responsive:false
           }}
           data={this.state.risk }
           height='500px'
           width='1000px'
           />
           </div>    
          </div>

          

        );


    }

}