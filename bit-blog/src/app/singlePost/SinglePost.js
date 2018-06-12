import React from "react";
import { postService } from "../../services/PostService";
import { Link } from "react-router-dom";



export class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            post: {},
            author: {},
            morePosts: []

        })
    }

    componentDidMount() {
        this.fetchPageData(this.props.match.params.id)
    }


    componentWillReceiveProps = (nextProps) => {
        this.fetchPageData(nextProps.match.params.id);
    }

    fetchPageData(postId) {
        postService.fetchPost(postId)
            .then((post) => {
                this.setState({post});
                this.fetchAuthorRelatedData(post.userId);
            })
            

    }

    fetchAuthorRelatedData = (userId) => {
        postService.fetchAuthor(userId)
            .then((author) => this.setState({author}))

        postService.fetchPostsFromAnAuthor(userId)
            .then((morePosts) => this.setState({morePosts}))
    }

    // loadAuthor() {
    //     postService.fetchAuthor(this.props.match.params.id)
    //         .then((author) => {
    //             return this.setState({
    //                 author: author
    //             })
    //         })
    // }


    render() {

        if (!this.state.post.id) {
            return null;
        }

        return (
            <div id="single-post-div">
                <h4>{this.state.post.title} </h4>

                <p id="author-name"> <Link to={"/authors/" + this.state.author.id}> {this.state.author.name} </Link> </p>
                <p> {this.state.post.body} </p>
                <div>
                    <div className="divider"></div>
                </div>
                <ul> 3 more posts from same author:
                    <li>{this.state.morePosts.slice(0, 3).map((post, i) => {
                        return <li><Link to={"/posts/" + this.state.morePosts[i].id} key={i}>{(this.state.morePosts[i].title)}</Link></li>;
                    })}</li>
                </ul>

            </div>
                )
    }

}
