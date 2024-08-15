import React from "react";

type props = {
    title: string
}

function Box({title}: props){
    return (
        <>
        <h1>{title}</h1>
        </>
    )
}

export default Box;