import React, { useState } from 'react';
import Lists from './Lists';

function List(props) {
    const[data,setData]=useState(Lists);
    console.log(data);
    return (
        <>
          <div className="container mt-5 text-center">
            <div className="row">
                <div className="col">
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Age</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((ele,i)=>{
                                console.log(ele);
                                return(
                                    <tr key={i}>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.age}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>  
        </>
    );
}

export default List;