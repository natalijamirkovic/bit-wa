import React from "react";


const PostItem = (props) => {
    const singlePost = props.myPost;
    const {title, body} = props.myPost;
    return (
        <div>
            <li>
                <div className="col s12 ">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"> {title}</span>
                            <p> {body}</p>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default PostItem