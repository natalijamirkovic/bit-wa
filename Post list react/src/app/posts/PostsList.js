import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
    const postList = props.myPosts;
    return (

        <ul>
            {postList.map((post) => {
                return <PostItem key={post.id} myPost={post} />
            })}
        </ul>
    )
}

export default PostList