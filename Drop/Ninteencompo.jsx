import React from 'react'
import { usetheme } from './ThemeContext'
import '../style/Ninteen.css'
export default function Ninteencompo() {
    let {isdarkmode}=usetheme()
    const themechanger=isdarkmode?'dark-theme':'light-theme'
  return (
    <>
    <div className={`container ${themechanger}`}>
        <p>This is world ended and no wishes a live.</p>
    </div>
    </>
  )
}
