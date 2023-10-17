import React, { useEffect } from 'react';
import { GetApiAction } from '../Actions/index';
import { useDispatch,useSelector } from 'react-redux';
function ShowData(props) {
   
    const dispatch = useDispatch();
    const response = useSelector((state)=>state.reducer.details)
    console.log(response);


   useEffect(()=>{
    dispatch(GetApiAction())
   },[dispatch])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className='table'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Country</th>
                            </tr>
         
                        {
                        
                        response.map((data,id)=>{
                                return <>
                                <tr key={id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.eamil}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.country}</td>
                                    </tr>
                                    </>
                            })
                            
                        }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowData;