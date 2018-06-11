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

        let counter = 0;
        for (let i = 0; i < this.data.posts.length; i++) {
            if (authorId === this.data.posts[i].userId) {
                counter++;
            }
        }
        return counter;
    }



    fetchAuthors() {
        return fetch(endPoint + "users")
            .then((response) => {
                return response.json()
            })
            .then((authors) => {
                this.data.authors = authors;
                return authors;
            });
    }

    fetchPostsFromAnAuthor(postId, numberOfPosts, authorId) {
        return fetch(endPoint + "posts?userId=" + authorId)
            .then((response) => {
                return response.json()
            })
            .then((postsArray) => {
                const posts = [];
                for (let i = 0; posts.length < numberOfPosts && i < postsArray.length; i++) {
                    if (postsArray[i].id !== postId) {
                        posts.push(postsArray[i]);
                    }
                }
                return posts;
            });
    }


    fetchAuthor(authorId) { //stavi kao parametar id, u singleAuthor proslijedi argumente preko this.props.match.
        return fetch(endPoint + "users/" + authorId)
            .then((response) => {
                return response.json()
            })
            .then((author) => {
                return author;
            })

    }



}
export const postService = new PostService();