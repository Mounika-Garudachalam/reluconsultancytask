import React from "react";

import Header from "../components/Header";
import Post from "../components/Post";
import { postdata } from "../helpers/postdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBarsStaggered, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Postcard from "../components/Postcard";
import {postcarddata} from "../helpers/postcarddata";

export default function Main(){
    return (
        <div className="main">
        <Header>
            <div className="search-wrapper">
                <div className="search-input-wrapper">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'#aaa',marginLeft:'10px'}}/>
                <input placeholder="Search here..." className="search-input"/>
                </div>
                <button className="filter-button"><FontAwesomeIcon style={{marginRight:'10px'}} icon={faBarsStaggered}/>Filters</button>
            </div>
            
        </Header>

        <div className="post-container">
        {postdata.map((post,index)=>(
            <Post
                key={index}
                imageIcon={post.imageIcon}
                author={post.author}
                tag={post.tag}
                content={post.content}
                image={post.image}
                likes={post.likes}
                comments={post.comments}
                shares={post.shares}
                />
        ))}
        </div>
        <div className="postcard-container">
            {postcarddata.map((postcard,index)=>(
                <Postcard
                    key={index}
                    postimg={postcard.postimg}
                />
            ))

            }
        </div>
        </div>
    );
}