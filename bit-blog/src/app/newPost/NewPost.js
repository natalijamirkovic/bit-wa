import React, { Component } from "react"
import { postService } from "../../services/PostService";


export class NewPost extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            body: "",
        }
    }

    handleTitle = (event) => {

        this.setState({
            title: event.target.value
        })
    }

    handleBody = (event) => {
        const body = event.target.value;
        this.setState({
            body: body
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        let userId = 2;
        postService.addNewPost(this.state.title, this.state.body, userId)
    }

    handleCancel = (event) => {
        window.location.reload(true);
    }

    render() {
        return (
            <div id="new-post">
                <h3>NEW POST</h3>
                <div>
                    <p>Title</p>
                    <input type="text" name="title" placeholder="Post Title" onChange={this.handleTitle} />
                    <p>Content</p>
                    <textarea name="comments" placeholder="write something" onChange={this.handleBody}>
                    </textarea>
                    <input type="button" value="Cancel" onClick={this.handleCancel}/>
                    <input type="submit" onClick={this.handleClick} />
                </div>
            </div>

        )
    }
}