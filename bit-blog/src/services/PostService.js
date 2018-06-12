import { endPoint } from "../shared/constants";


class PostService {
    constructor() {

        this.data = {
            posts: [],
            authors: []
        };
    }


    fetchPosts() {
        return fetch(endPoint + "posts")  //poslali request na server za postove
            .then((response) => {             //response=browserObject
                return response.json()        //pretvorili u jsonObject
            })
            .then((posts) => {                //jsonObject smjestili u objekat data.posts
                this.data.posts = posts;      // vracamo posts
                return posts;
            });

    }

    fetchPost(postId) {
        return fetch(endPoint + "posts/" + postId)
            .then((response) => {
                return response.json()
            })
            .then((post) => {
                return post;
            })
    }

    fetchNumberOfPosts(authorId) {

        let counter = 0;                                        //dohvatamo broj postova od jednog autora, zbog toga mu u arg proslijedimo autorov id
        for (let i = 0; i < this.data.posts.length; i++) {      //user id 
            if (authorId === this.data.posts[i].userId) {
                counter++;
            }
        }
        return counter;
    }

    fetchAuthors() {
        return fetch(endPoint + "authors")
            .then((response) => {
                return response.json()
            })
            .then((authors) => {
                this.data.authors = authors;
                return authors;
            });
    }

    fetchPostsFromAnAuthor(authorId) {
        return fetch(endPoint + "posts?userId=" + authorId)
            .then((response) => {
                return response.json()
            });
    }

    fetchAuthor(authorId) { //stavi kao parametar id, u singleAuthor proslijedi argumente preko this.props.match.
        return fetch(endPoint + "authors/" + authorId)
            .then((response) => {
                return response.json()
            })

    }


    addNewPost(title, body, userId) {
        return fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(post => {
                console.log(post);
            })
    }

}
export const postService = new PostService();