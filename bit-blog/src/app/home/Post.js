import React from "react";
import { Link } from "react-router-dom";


export const Post = (props) => {

  
    return (
        <div className="post">
            <h4><Link to={"/posts/" + props.post.id}> {(props.post.title)} </Link></h4>
            <p className="truncate">{props.post.body}</p>
        </div>
);
}