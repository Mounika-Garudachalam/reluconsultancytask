import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Postcard=({postimg})=>{
    return (
        <div className="postcard">
            <img src={postimg} alt="postimage" className={`postimage`}/>
            <p style={{fontSize:'14px',fontWeight:'bold'}}>Modern wall decor framed painting</p>
            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
                <h3>$199.99</h3>
                <div style={{padding:'15px'}}>
                    <FontAwesomeIcon style={{color:"rgba(31, 141, 141, 0.701)"}} icon={faStar}/>
                    <FontAwesomeIcon style={{color:"rgba(31, 141, 141, 0.701)"}} icon={faStar}/>
                    <FontAwesomeIcon style={{color:"rgba(31, 141, 141, 0.701)"}} icon={faStar}/>
                    <FontAwesomeIcon style={{color:"rgba(31, 141, 141, 0.701)"}} icon={faStar}/>
                    <FontAwesomeIcon style={{color:"rgba(31, 141, 141, 0.701)"}} icon={faStar}/>
                </div>
            </div>
        </div>
    );
}

export default Postcard;