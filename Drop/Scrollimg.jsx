import React, { useRef } from 'react'

export default function Scrollimg() {
    const listRef=useRef(null)

    // scrollimgview to nextimg using function
    function scrollIndex(index) {
        const listnode=listRef.current
        const imgnode=listnode.querySelectorAll('li > img')[index]
        imgnode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
  return (
    <>
     <nav>
        <button onClick={()=>scrollIndex(0)} style={{cursor:"pointer"}}>
          Tom
        </button>
        <button onClick={()=>scrollIndex(1)}>
          Maru
        </button>
        <button onClick={()=>scrollIndex(2)}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  )
}
