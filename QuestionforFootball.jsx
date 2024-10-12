import React, { useEffect, useState } from 'react'

const QuestionforFootball = () => {
const [selected,setSelected]=useState(null)
const [match,setMatch]=useState([])

   useEffect(()=>{
    fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${selected}`)
    .then((res)=>res.json())
    .then((responce)=>setMatch(responce.data))
   },[selected])

    const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
  return (
    <div>
        <ul>
        {years.map((year,i)=>{
            return <li key={i} onClick={()=>setSelected(year)}>
                {year}
            </li>
        })}
        </ul>

        {match.length > 0 ?(
           <ul>
            {match?.map((map)=>
            <li>{match.name}and{match.winner}</li>
            )}
           </ul>
        ):(
            <div>
                not match
            </div>
        )}
    </div>
  )
}

export default QuestionforFootball