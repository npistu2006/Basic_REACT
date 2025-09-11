import React from 'react'
interface BoxProps{
    color: string

}
// rafce tab tab
const BoxComp = ({color}:BoxProps) => {
  return (
    <div className="box"
                style={{width: "5rem", height: "5rem", boxShadow:"0 0 10px 3px rgba(0,0,0, .5) inset", borderRadius: "10px", background: color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2rem"}}
            >

            </div>
  )
}

export default BoxComp