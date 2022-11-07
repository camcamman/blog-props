import React from "react";


export default function (prop){
    return(
        <div className="link">
            <p className="link-main-text"> {prop.item.title} </p>
            <p className="link-sub-text">{prop.item.itemsubTitle}</p>
            <p className="link-posted">Posted by <span className="link-auther">{prop.item.author}</span> on {prop.item.date}</p>
        </div>
    )
}

//  title: "Man must explore, and this is exploration at its greatest",
// subTitle: "Problems look mighty small from 150 miles up",
// author: "Start Bootstrap",
// date: "September 24, 2019"