import { useState } from "react";
import "./style.css"

function ColorPicker(){
    const [color,setColor]=useState("#6a6716");
    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <div className="container">
            <div className="colorName">{color.toUpperCase()}</div>
            <div className="colorBox" style={{background:color}}>
            </div>
            <div className="colorPicker">
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </div>
    );
}
export default ColorPicker;