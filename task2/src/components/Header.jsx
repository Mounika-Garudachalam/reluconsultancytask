import React from "react";

const Header=props=>{
    return (
        <div className={`header ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
}

export default Header;