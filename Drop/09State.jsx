import React, { useState } from 'react';
var images=['https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwz6_tf4zZOmp3mGZ-trVRAgAh9E1OaAeFQorcKibUQ&s',
'https://images.immediate.co.uk/production/volatile/sites/3/2018/04/https-2F2Fblogs-images.forbes.com2Fscottmendelson2Ffiles2F20182F042Fimage001-cebe539.jpg?quality=90&crop=75px,0px,811px,540px&resize=960,640',
'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
'https://w0.peakpx.com/wallpaper/801/442/HD-wallpaper-thor-marvel-thumbnail.jpg']
function State(props) {
    const[slide,setSlide]=useState('')
    const hande=()=>{
      setSlide(slide+1)
      console.log(slide+1)
    }
    const phandel=()=>{
         setSlide(slide-1)
    }
    let image=images[slide]
    return (
        <div style={{textAlign:"center"}}>
            <button onClick={hande}>Next</button>
            
            <img src={image}  />
            <button onClick={phandel}>Previewous</button>
        </div>
    );
}

export default State;