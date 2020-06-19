import React from 'react';

const Pagination =({postPerPage,totalPosts,paginate})=>{
    const PageNumbers=[];
    for(let i =1;i<=Math.ceil(totalPosts/postPerPage);i++){
        PageNumbers.push(i);

    }
    
    return(
        
            <div className="col s12 offset-s10">
       <ul className="pagination">
           <li><a href="#"><i className="material-icons">chevron_left</i></a></li>
        {
            PageNumbers.map(num=>(
                <li key={num}>
                   <a href="#"onClick={()=> paginate(num)}> {num}</a>

                </li>
            ))

        } 
        <li><a href="#"><i className="material-icons">chevron_right</i></a></li>
        </ul>   
        </div>
        

    )


}
export default Pagination;
/**{
    PageNumbers.map(num=>(
        <li key={num} className="active">
           <a href="#"onClick={()=> paginate(num)}> {num}</a>

        </li>
    ))

}    
**/