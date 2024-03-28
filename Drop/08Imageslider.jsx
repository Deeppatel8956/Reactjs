import React, { useReducer } from 'react';
const inihtalstate={
    currentImageindex:0
}
const Imagereducer=(state,action)=>{
switch (action.robast) {
    case 'NEXT_IMAGE':
        return {currentImageindex:state.currentImageindex+1}
    case 'PREVIOUS_IMAGE':
        return {currentImageindex:state.currentImageindex-1}    

    default:
        return state;
}

}
const images=['https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwz6_tf4zZOmp3mGZ-trVRAgAh9E1OaAeFQorcKibUQ&s',
'https://images.immediate.co.uk/production/volatile/sites/3/2018/04/https-2F2Fblogs-images.forbes.com2Fscottmendelson2Ffiles2F20182F042Fimage001-cebe539.jpg?quality=90&crop=75px,0px,811px,540px&resize=960,640',
'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
'https://w0.peakpx.com/wallpaper/801/442/HD-wallpaper-thor-marvel-thumbnail.jpg']
function Imageslider(props) {
    const[state,dispatch]=useReducer(Imagereducer,inihtalstate)
    const currentImage=images[state.currentImageindex]
    return (
        <div>
            <h1>Image Gallery</h1>
            <img src={currentImage} alt=""  />
            <button onClick={()=>dispatch({robast:'NEXT_IMAGE'})}>Next</button>
            <button onClick={()=>dispatch({robast:'PREVIOUS_IMAGE'})}>Preview</button>
        </div>
    );
}

export default Imageslider;