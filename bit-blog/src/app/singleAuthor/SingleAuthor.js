import React from "react"
import { Link } from "react-router-dom";
import { postService } from "../../services/PostService";
import { Authors } from "../authors/Authors";



export class SingleAuthor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: {}
        }
    }

    loadAuthor() {
        postService.fetchAuthor(this.props.match.params.id)
            .then((author) => {
                console.log(author);
                return this.setState({
                    author: author
                })
            })
    }

    componentDidMount() {
        this.loadAuthor()
    }

    render() {
        if (!this.state.author.name) {
            return null;
        }
        
        return (
            <div id="single-author-div">
               <p id="all-authors"> <Link to="/authors">Back</Link></p>
                <h1 id="single-author">Single Author</h1>
                <div>
                    <img src="http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-9-1.png" alt="avatar" id="image"/>
                    <h3> {this.state.author.name} </h3>
                    <p>username:<b>{this.state.author.username}</b></p>
                    <p>email:<b>{this.state.author.email}</b></p>
                    <p>phone:<b>{this.state.author.phone}</b></p>
                </div>
                <div>
                    <div className="divider"></div>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>street:<b>{this.state.author.address.street}</b></p>
                    <p>city:<b>{this.state.author.address.city}</b></p>
                    <p>zipcode:<b>{this.state.author.address.zipcode}</b></p>
                    <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124306.91258300509!2d" + this.state.author.address.geo.lng + "!3d" + this.state.author.address.geo.lat + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43f1fbae321aa3%3A0xeec51b38cf4362b!2sBarbados!5e0!3m2!1sen!2srs!4v1528721318102"} width="300" height="170" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>

                </div>
                <div>
                    <div className="divider"></div>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>name:<b>{this.state.author.company.name}</b></p>
                    <p>slogan:<b>{this.state.author.company.catchPhrase}</b></p>
                </div>
            </div>
        )
    }
}