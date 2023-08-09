import React, { Component } from 'react';
import Resusable_Compo from './04Resusable'; 

class Props extends Component {

    render() {
        return (
         <>
         <div className="product">
         {/* Resusable_Compo name is use for create new tag for the propscomponent method */}
            <Resusable_Compo imgsrc="/src/Compo/img/apple.jpg" ProductName="apple"
            oldprice="$3000" Newprice="$6000" />
            
            <Resusable_Compo imgsrc="/src/Compo/img/hp.jpg" ProductName="asus"
            oldprice="$3000" Newprice="$20000" />

           <Resusable_Compo imgsrc="/src/Compo/img/asus.jpg" ProductName="hp"
            oldprice="$3000" Newprice="$50000" />
         </div>
         </>   
        );
    }
}

export default Props;