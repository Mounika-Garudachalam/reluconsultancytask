import React from "react";

export default function Card({name,handle,profileimage,backgroundImage}){
    return (
        <div className="card">
            <div className="card-header" style={{backgroundImage:`url(${backgroundImage})`}}>
                <img src={profileimage} alt={name} className="profile-image"/>
            <div className="card-body">
                <h3 className="artist-name">{name}</h3>
                <p className="artist-handle">{handle}</p>
            </div>
            </div>
        </div>
    );
}