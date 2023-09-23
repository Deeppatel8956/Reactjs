import React, { useState } from 'react';
import Dlist from './Dlist';
function Datatable(props) {
    const [search,setSearch]=useState('');
    console.log(search);
    
    return (
        <>
          <div className="container mt-5 ">
            <form action="">
            <input type="text" name="" id="" className='form-control mb-3' onChange={(e)=>setSearch(e.target.value)} placeholder='Please search here...'/>
            </form>
            
                    <table className="table  table-bordered ">
                        <thead>
                            <tr>
                                <td>FirstName</td>
                                <td>Lastname</td>
                                <td >Email</td>
                                <td>Age</td>
                                <td>No</td>
                            </tr>
                        </thead>

                        {
                            Dlist.filter((item)=>{
                                return search.toLowerCase()===''?item:item.Firstname.toLowerCase().includes(search);
                            }).map((item,id)=>{
                                // console.log(ele);
                                return(
                                    <tbody key={id} >
                                    <tr >
                                    <td>{item.Firstname}</td>
                                    <td>{item.Lastname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>{item.No}</td>
                                </tr>
                                </tbody>
                                )
                            })
                        }
                        </table>
                </div>
           
        </>
    );
}

export default Datatable;