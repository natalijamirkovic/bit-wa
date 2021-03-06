import React from "react"
import { Link } from "react-router-dom";
import { postService } from "../../services/PostService";




export const Author = (props) => {


return (
    <div className="post">
        <h4><Link to={"/authors/"+ props.author.id}> {(props.author.name)} {postService.fetchNumberOfPosts(props.author.id)} posts</Link></h4>
    </div>
);
}

