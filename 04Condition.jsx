import React from 'react';

function Condition(props) {
    return (
        <>
         <div className="container">
            <div className="row">
                <div className="col">
                    <Item name="Apple" isPacked={true}/>
                    <Item name="Orang" isPacked={true}/>
                    <Item name="Apple" isPacked={false}/>
                    <Item name="Apple" isPacked={false}/>
                    
                    </div></div></div>   
        </>
    );
}

export default Condition;
function Item({name,isPacked}) {
    if(isPacked){
        return <li>{name}</li>
    }
    return <li></li>
}