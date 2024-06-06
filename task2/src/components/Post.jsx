import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Post=({imageIcon,author,tag,content,image,likes,comments,shares})=>{
    return (
        <div className='post'>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                <img src={imageIcon} alt="imageicon" className='image-icon'/>  
                <div style={{display:'flex',flexDirection:'column'}}>
                <h3 className='author-info'>{author}</h3>
                <p className='tag'>{tag}</p>
                </div>
                </div> 
                <FontAwesomeIcon icon={faEllipsisVertical}/>
            </div>
            <p>{content}<a style={{color:'blue'}}>Read More</a></p>
            <img src={image} alt="image" className='image'/>
            <hr className='post-divider'/>
            <FontAwesomeIcon style={{marginRight:'10px'}} icon={faHeart}/><span style={{marginRight:'10px'}}>{likes}</span>
            <FontAwesomeIcon style={{marginRight:'10px'}} icon={faComment}/><span style={{marginRight:'10px'}}>{comments}</span>
            <FontAwesomeIcon style={{marginRight:'10px'}} icon={faShare}/><span style={{marginRight:'10px'}}>{shares}</span>
        </div>
    );
}

export default Post;