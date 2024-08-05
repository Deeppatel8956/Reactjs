import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Edit(props) {
    const navigate=useNavigate()
    const [title,setTitle]=useState('')
    const [dec,setDec]=useState('')

    const handeltilt=(e)=>{
        setTitle(e.target.value)
    }

    const handeldec=(e)=>{
        setDec(e.target.value)
    }

    // update
    const handleEdit=()=>{
        let blogs=localStorage.getItem('blogs') &&localStorage.getItem('blogs').length > 0 ?JSON.parse(localStorage.getItem('blogs')):[]

        const _blogs=blogs.map((blog,blogIndex)=>{
            if (blogIndex == localStorage.getItem('editIndex')) {
                return  {title,dec}
            }else{
                return blog
            }
        })
        console.log(_blogs)
        localStorage.setItem('blogs', JSON.stringify(_blogs))
        navigate('/')
    }
    return (
        <div>
            <form action=""onClick={handleEdit}>
                <div className="mb-3">
                <label htmlFor="Tilte">Titlte</label>
                <input type="text" className=' form-control' value={title}onChange={(e)=>handeltilt(e)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="Dec">Dec</label>
                <input type="text" className=' form-control' value={dec}onChange={(e)=>handeldec(e)}/>
                </div>
                <button className='  btn btn-outline-secondary' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Edit;