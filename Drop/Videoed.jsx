import React, { useRef, useState } from 'react'

export default function Videoed() {
    const [isplaying,setIsplaying]=useState(false)
    const ref=useRef(null)

    function handelclick() {
        const nextplaying=!isplaying
        setIsplaying(nextplaying)

        if (nextplaying) {
            ref.current.play()
        }else{
            ref.current.pause()
        }
    }
  return (
    <>
    <div className="container">
        <button onClick={handelclick}>
             {isplaying?"Pause":"Play"}
        </button>
        <video
         width="280"
         ref={ref}
         onPlay={()=>setIsplaying(true)}
         onPause={()=>setIsplaying(false)}>
         <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
        </video>
    </div>
    </>
  )
}
