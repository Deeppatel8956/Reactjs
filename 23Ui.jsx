import React, { useContext } from 'react';
import { Thmesd } from './24Pratice2';
function Ui(props) {
    const Darktheme=useContext(Thmesd)
    const theme={
        backgroundColor:Darktheme?"red":"yellow",
        color:Darktheme?"yellow":"red"
    }
    return (
        <div>
            <div className="container" style={theme}>
                <h1>hello coders</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil!</p>
            </div>
        </div>
    );
}

export default Ui;