import React from "react"
import { postService } from "../../services/PostService";
import { Author } from "./Author";




export class Authors extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: []
        }
    }

    loadAuthors = () => {
        postService.fetchAuthors() 
        .then((authors) => {
            return this.setState({
                authors:authors
            })
        })
    }

    componentDidMount() {
        this.loadAuthors()
    }

    render() {
        return (
            <div >
                <h1 id="posts-home">AUTHORS</h1>
                {this.state.authors.map((author, i) => {
                    return <Author author={author} key={i} />;
                })}
            </div>
        )
    }

}