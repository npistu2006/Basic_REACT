import { useState, type ReactNode } from "react";
import BoxComp from "./BoxComp";

interface SquareComProps{
    children: ReactNode
}

const SquareComp = () =>{
{/* Függvények */}
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

    const setBoxCount = () =>{
        return setCount(prev => prev === 10 ?  0 : prev + 1 )
    }

    return(     // NEM HTML csak HTML szerű --> fordízó: XML fájl 
        <main style={{display: "flex", flexDirection: "column", background: "rgb(200,200,200)", height: "100vh", justifyContent:"center", alignItems:"center", gap:"2rem"}}>
            {/* Label */}
            <label htmlFor="" style={{fontWeight:"700", fontSize:"1rem", fontFamily:" Arial"}}>A doboz színe: {color}</label>
        
            {/* <div className="box"
                style={{width: "5rem", height: "5rem", boxShadow:"0 0 10px 3px rgba(0,0,0, .5) inset", borderRadius: "10px", background: color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2rem"}} onClick={() => setCount(prev => prev + 1)}> {count}
            </div> */}
            <div className="row" style={{display:"flex", gap:"1rem"}}>
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
            </div>
             <div className="row" style={{display:"flex", gap:"1rem"}}>
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
            </div>
             <div className="row" style={{display:"flex", gap:"1rem"}}>
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
                <BoxComp color={color} setFn={setBoxCount} count={count}  />
            </div>
            {/* Színezz gomb */}
            <button type="button" style={{padding:"0.6rem", borderRadius:"10px", background: "black", color:"white", border:"none", fontFamily:"Times New Roman", fontSize:"1rem"}} onClick={setBoxColor}>Színezz!</button>
            
            {/* Törlés gomb */}
            <button type="button" style={{padding:"0.6rem", borderRadius:"10px", background: "black", color:"white", border:"none", fontFamily:"Times New Roman", fontSize:"1rem"}} onClick={() => {setColor("rgb(255,255,255)"); setCount(0)}}>Törlés</button>

        </main>
    )
};

export default SquareComp;