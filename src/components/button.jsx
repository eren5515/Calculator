import React from "react";



function Button(props){

    function handleClick(){
        props.onClick(props.value);
    }


    


   
    return (
        <div onClick={handleClick} key={props.key} class={"button number number-"+props.value} >

        <h1>
        {props.value}

        </h1>
       


        </div>
    )



}

export default Button;