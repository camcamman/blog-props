import React from "react";
import Header from "./Header";
import MainLinks from "./MainLinks";
import info from "./Info"

export default function Main () {
    const newLink = info.map(item => {
        return (
            <MainLinks 
                key={item.id}
                item={item}
            />
        )
    })  
    
    return(
        <div>
        <Header />
        <div>{newLink}</div>
    </div>
    )
}