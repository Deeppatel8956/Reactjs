import React from 'react';

function Sequare(props) {
    return (
        <>
            <div onClick={props.onClick} style={{border:"2px solid ",height:"100px", width:"100px", display:"flex" ,justifyContent:"center", alignItems:"center", fontSize:"20px"}}>
                <h5 >{props.Value}</h5>
            </div>
        </>
    );
}

export default Sequare;