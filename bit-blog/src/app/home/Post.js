import React from "react";
import { Link } from "react-router-dom";


export const Post = (props) => {

  
    return (
        <div className="post">
            <h2><Link to={"/posts/" + props.post.id}> {(props.post.title)} </Link></h2>
            <p>{props.post.body}</p>
        </div>
);
}