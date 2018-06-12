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


// primili smo iz Home.js preko propsa post      (post ={post}) ;     
// kada kliknemo na naslov posta treba da nam se otvori na novoj stranici, stoga mora da ima Link to u sebi.
// da bismo razlikovali proslijedili smo postu u Link to props.post.id

