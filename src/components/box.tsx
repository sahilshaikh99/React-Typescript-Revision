import React, { ReactNode } from "react";

type props = {
    title: string,
    greet: (a: string) => void,
    children: ReactNode
}

function Box({title, greet, children}: props){
    greet("Hello Sahil");
    return (
        <>
        <h1>{title}</h1>
        {children}
        </>
    )
}

export default Box;