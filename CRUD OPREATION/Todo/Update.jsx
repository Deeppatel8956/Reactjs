import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostApiAction ,UpdateApiAction} from '../Actions/index';
import { useParams } from 'react-router-dom';
import Getetailsid from '../Actions/index'
function Home(props) {
  const [name,setName]=useState('');
  const[phone,setPhone]=useState('');
  const[country,setCountry]=useState('');
  const {id}=useParams();
  const [getdetails]=Getetailsid(id)
  
  useEffect(()=>{
    const data=()=>{
        console.log(getdetails.data);
        if (getdetails.data) {
           setName(getdetails.data.name);
           setPhone(getdetails.data.phone);
           setCountry(getdetails.data.country);
        }
    }
    data()
 },[getdetails.data]);

  const Namehandeler=(e)=>{
    setName(e.target.value)
  }

  const Phonehandeler=(e)=>{
    setPhone(e.target.value);
  }


  const Countryhandeler=(e)=>{
    setCountry(e.target.value)
  }

  const dispatch=useDispatch()
  const clickhandel=(e)=>{
  const finaldata={
       name:name,
       phone:phone,
       country:country
  }
  // dispatch(PostApiAction(finaldata))
  dispatch(UpdateApiAction(finaldata,id))
}
  return (
    <div>
      <div className="one">
      <div className="container mt-3 ">
        <div className="row">
          <div className="col-5">
            <form>
              <div class="mb-3">
                {/* <label for="exampleInputEmail1" class="form-label">Name</label> */}
                <label htmlFor="" className='form-label'>Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={Namehandeler}
                name='name' defaultValue={name}/>

              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleInputPassword1" onChange={Phonehandeler}
                name='phone' defaultValue={phone}/>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Country</label>
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={Countryhandeler}
                name='country' defaultValue={country}/>
              </div>
              <button type="button" class="btn btn-primary" onClick={(e)=>clickhandel(e)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;