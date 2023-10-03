import React from 'react';
import { createContext,useContext } from 'react';
import Previues from './44Previues';
const Themes={
    dark:
    {
        Fgcolor:"white",
        Bgcolor:"orange"
    },
    light:{
        Fgcolor:"black",
        Bgcolor:"red"
    }
}
const Mythem=createContext(Themes.dark)
function Usecontext(props) {
    const Them=useContext(Mythem)
    return (
        <>
            <div className="container mt-4">
                    <div className="row">

                <div className="col-4">

                    <div className="card p-5" style={{backgroundColor:Them.Bgcolor,color:Them.Fgcolor}}>
                        <h1> Hello form </h1>
                        <form action="">
                            <input type="text" name="" id="" placeholder='Enter the name....' className='form-control '/>
                            <br />
                            <br />
                            <input type="password" name="" id="" placeholder='Enter the password...' className='form-control'/>
                            <br />
                            
                            <button className='btn btn-primary mt-3'> login</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <div className='container'>
            <Previues/>
            </div>
        </>
    
    );
}

export default Usecontext;