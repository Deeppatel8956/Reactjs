import React, { useState } from 'react';

function Crudsimple(props) {
    const [input, setInput] = useState({
        name: '',
        email: '',
        age: ''
    })
    const [todo,setTodo]=useState([])
    const [editclick,setEditclick]=useState(false)
    const [editindex,setEditindex]=useState("")
    const handelchange=(e)=>{
        setInput({...input,[e.target.name]:[e.target.value]})
    }

    const handelsubmit=(event)=>{
        event.preventDefault()
        if (editclick) {
            const tempTable=todo
            Object.assign(tempTable[editindex],input)
            setInput([...tempTable])
            setEditclick(false)
            setInput({
                name:'',
                email:'',
                age:''
            })
        } else {
            setTodo([...todo,input])
        setInput({
            name:'',
            email:'',
            age:''
        })
        }
    }

    const handeldelete=(ind)=>{
        const filter=todo.filter((item,i)=>i !== ind)
        setTodo(filter)
    }

    const handeledit=(ind)=>{
        const tempdata=todo[ind]

        setInput({
            name:tempdata.name,
            email:tempdata.email,
            age:tempdata.age
        })
        setEditclick(true)
        setEditindex(ind)
    }
    return (
        <div className=' container'>
            <form onSubmit={handelsubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" 
                    value={input.name} 
                    name='name' 
                    onChange={handelchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="exampleInputPassword1"
                    value={input.email}
                    name='email'
                    onChange={handelchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Age:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                    value={input.age}
                    name='age'
                    onChange={handelchange} />
                </div>
                <button type="submit" className="btn btn-primary">{editclick ? "update" :"Add"}</button>
            </form>

            <div className='mt-5'>
                <table className=' table'>
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        todo.map((item,index)=>{
                            return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button onClick={()=>handeledit(index)} className='btn btn-primary'>Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>handeldelete(index)} className='btn btn-danger'>Delet</button>
                                    </td>
                                  </tr>
                        })
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Crudsimple;

