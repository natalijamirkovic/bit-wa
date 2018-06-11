import React from "react";
import { SingleAuthor } from "../singleAuthor/SingleAuthor";
import { postService } from "../../services/PostService";
import { Link } from "react-router-dom";



export class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.setState = ({
            post:{}
        })
    }

    loadPost() {
        postService.fetchPost(this.props.match.params.id)
            .then((post) => {
                return this.setState({
                    post:post
                })
            })
    }

    componentDidMount() {
        this.loadPost()
    }

    render() {

        if (!this.state.post.id) {
            return null;
        }

        return(
            <div>
                <h1>SINGLE POST TITLE </h1>
                <p> <Link to="authors/:id"> Author Name </Link> </p>
                <p> {this.state.post.body} </p>
                <div>
                    <div className="divider"></div>
                </div>
                <p> more posts from same author</p>
            </div>
        )
    }













}
