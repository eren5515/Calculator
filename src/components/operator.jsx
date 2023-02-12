import React from "react";

function Operator(props){
    function handleClick(){
        props.onClick(props.value);
    }


    return(<div key={props.key} onClick={handleClick} className={"button operator operator"+props.value}>
    <h1> 
       {props.value}

    </h1>
    </div>)
}

export default Operator;