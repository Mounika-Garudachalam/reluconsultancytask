import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { artistdata } from "../helpers/artistdata";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Sidecard(){
    return (
        <>
        
        <div className="sidecard">
        <Button>Become a Seller</Button>
        <div className="tab-menu">
            <Link className='tab'>Artists</Link>
            <Link className='tab'>Photographers</Link>
        </div>
        <div className='artist-container'>
            {artistdata.map((artist,index)=>(
                <Card 
                    key={index}
                    name={artist.name}
                    handle={artist.handle}
                    profileimage={artist.profileImage}
                    backgroundImage={artist.backgroundImage}
                />
            ))}
        </div>
            <Footer>
                <p>Privacy</p>
                <p>Terms of Service</p>
                <p>Cookie Notice</p>
            </Footer>
        </div>
        </>
    );
}