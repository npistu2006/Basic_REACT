import { useState, type ReactNode } from "react";

interface SquareComProps{
    children: ReactNode
}

const SquareComp = (children: SquareComProps) =>{

    const [color, setColor] = useState<string>("rgb(255,255,255)")
    let [count, setCount] = useState<number>(0);

    const randomNum = () => Math.floor(Math.random()*256);

    const randomColor = ():string => {
        const r =  randomNum();
        const g =  randomNum();
        const b =  randomNum();
        return `rgb(${r},${g},${b})`
    }

    const setBoxColor = ()=>{
        return setColor(randomColor());
    }

    return(     // NEM HTML csak HTML szerű --> fordízó: XML fájl 
        <main style={{display: "flex", flexDirection: "column", background: "rgb(200,200,200)", height: "100vh", justifyContent:"center", alignItems:"center", gap:"2rem"}}>

        <label htmlFor="" style={{fontWeight:"700", fontSize:"1rem", fontFamily:" Arial"}}>A doboz színe: {color}</label>

            
            <button type="button" style={{padding:"0.6rem", borderRadius:"10px", background: "black", color:"white", border:"none", fontFamily:"Times New Roman", fontSize:"1rem"}} onClick={setBoxColor}>Színezz!</button>
            
            <button type="button" style={{padding:"0.6rem", borderRadius:"10px", background: "black", color:"white", border:"none", fontFamily:"Times New Roman", fontSize:"1rem"}} onClick={() => {setColor("rgb(255,255,255)"); setCount(0)}}>Törlés</button>
        </main>
    )
};

export default SquareComp;