import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import firestore from '../Firebsse/firebase';

function Demo(props) {
    const [fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    const [id,setId]=useState('');

    const[show,setShow]=useState(false);
    const [val,setVal]=useState([]);
    const value=collection(firestore,"demo");
    useEffect(()=>{
        const getdata=async()=>{
            const bdval=await getDocs(value);
            setVal(bdval.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        getdata()
    })

    const handelCreate=async()=>{
        await addDoc(value,{name1:fname, name2:lname})
        setFname('');
        setLname('');
    }

    const deletedata=async(id)=>{
        const deleteval=doc(firestore,"demo",id)
        await deleteDoc(deleteval)
    }


    const handeleditdata=async(id , name1 ,name2)=>{
        setFname(name1)
        setLname(name2)
        setId(id);
        setShow(true)
    }
    const handelupdata=async()=>{
        const updata=doc(firestore,"demo",id)
        await updateDoc(updata,{name1:fname,name2:lname})
        setShow(true)
        setFname("");
        setLname("")
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} />
                        <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} />

                        {!show?<button onClick={handelCreate} className='btn btn-warning'>create</button>
                        :<button onClick={handelupdata} className='btn btn-dark'>Update</button>}
                    </div>

                    <div className="col-6">
                        <table className='table-bordered'>
                            <th>Name</th>
                            <th>lname</th>
                            <th>Delete</th>
                            <th>upadate</th>

                            {
                                val.map(values=>
                                    <tr>
                                        <td width={100}>{values.name1}</td>
                                        <td width={100}>{values.name2}</td>
                                        <td width={100}><button className='btn btn-primary' onClick={()=>deletedata(values.id)}>delete</button></td>
                                        <td width={100}><button className='btn btn-info' onClick={()=>handeleditdata(values.id,
                                            values.name1,values.name2)}>Edit</button></td>
                            
                                    </tr>
                                    )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;