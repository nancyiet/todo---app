
import React from "react";
import "../index.css"
function InputArea(props){
    return(
<div className="form">
<input 
    name={props.name}
    onChange={props.onsetToDoList}
    type="text"
    placeholder="add ToDo"
    value={props.value}
    />
  
    <button  
    type="submit" onClick={props.onwriteList}><span>Add</span></button>
        </div>
    );
}
export default InputArea;