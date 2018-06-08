import { endPoint } from "../shared/constants";
import { Post } from "../models/Post";


class PostService {
  
    fetchPosts() {
       return fetch(endPoint)
        .then((response) =>{
           return response.json()
        })

    }

    adaptPostData(postData) {
        const myPostData = postData.map((post) => {
            const {title, body} = post; 
            return new Post(title, body);
        }) 
        return myPostData
    }

    loadData(postData) {
        adaptPostData(postData);
    }


}

export const postService = new PostService();