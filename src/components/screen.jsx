import React from "react";

function Screen(props){

    return <div class="screen">
        <h1 class="screenText">{props.value}</h1>
    </div>
}

export default Screen;