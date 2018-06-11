import React from "react";
import { postService } from "../../services/PostService";
import { Post } from "./Post";




export class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: []
        }

    }

    loadPosts = () => {
        postService.fetchPosts()
            .then((posts) => {
                return this.setState({
                    posts: posts
                })

            })
    };

    componentDidMount(){
        this.loadPosts();
    }


    render() {
        return (
            <div >
                <h1 id="posts-home">POSTS</h1>
                {this.state.posts.map((post, i) => {
                    return <Post post={post} key={i} />;
                })}
            </div>
        )
    }

}

