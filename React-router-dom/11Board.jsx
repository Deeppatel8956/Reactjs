import React from 'react';
import Sequare from './12Sequare';
import { useState } from 'react';

function Board(props) {
    const [state, setState] = useState(Array(9).fill(null));
    const [isturn, setIstrun] = useState(true);
    // console.log("state",state)
    const checkwiner=()=>{
        const winer=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let check of winer) {
            let[a,b,c]=check;
            if (state[a]!==null&& state[a]===state[b]&&state[a]===state[c]) {
                return state[a];
            }
        }
        return false;
    }
     const iswiner=checkwiner();
    const handelclick = (index) => {
        let copytext = [...state];
        copytext[index] = isturn ? "O" : "X";
        setState(copytext)
        setIstrun(!isturn)
    }
    const Reset=()=>{
        setState(Array(9).fill(null));
    }
    return (
        <>
            <div className="box mt-4 ">
               
                <h1 className='text-center'>{isturn?"O":"X"} Please move the Player</h1>  
                <div className="logo-row">
                    <Sequare onClick={() => handelclick(0)} Value={state[0]} />
                    <Sequare onClick={() => handelclick(1)} Value={state[1]} />
                    <Sequare onClick={() => handelclick(2)} Value={state[2]} />
                </div>
                <div className="logo-row">
                    <Sequare onClick={() => handelclick(3)} Value={state[3]} />
                    <Sequare onClick={() => handelclick(4)} Value={state[4]} />
                    <Sequare onClick={() => handelclick(5)} Value={state[5]} />
                </div>
                <div className="logo-row">
                    <Sequare onClick={() => handelclick(6)} Value={state[6]} />
                    <Sequare onClick={() => handelclick(7)} Value={state[7]} />
                    <Sequare onClick={() => handelclick(8)} Value={state[8]} />
                </div>
                { iswiner ?(<h2 className='mt-2 text-center'>{iswiner} won the game</h2>) :("")}
                <div className="text-center">
                <button className='btn btn-info mt-4  mx-2' onClick={Reset}>Reset Game</button>
                </div>
            
            </div>
        </>
    );
}

export default Board;