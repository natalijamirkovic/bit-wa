import {fetchUserPosts} from './data_module.js'
import {displayUserPosts} from './ui_module.js';

export const init = () => {
    fetchUserPosts().then(displayUserPosts);
}