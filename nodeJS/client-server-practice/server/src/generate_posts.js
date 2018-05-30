const loremIpsum = require('lorem-ipsum');
const Post = require('./entities/Post.js');

const createTitle = () => loremIpsum({
    count: 3,
    units: "words"
})

const createIntro = () => loremIpsum({
    count: 2,
    units: "sentences"
})

const createId = () => {
    return Math.floor(Math.random() * 1000);
}

const createUserPosts = () => {
    const userPosts = [];
    for (let i = 0; i < 50; i++) {
        const id = createId();
        const title = createTitle();
        const intro = createIntro();
        const user = new Post(id, title, intro);
        userPosts.push(user);
    }
    return userPosts;
}


// const userPosts = [{
//     id: createId(),
//     title: createTitle,
//     intro: createIntro
// }, {
//     id: createId(),
//     title: createTitle,
//     intro: createIntro
// }, {
//     id: createId(),
//     title: createTitle,
//     intro: createIntro
// }, {
//     id: createId(),
//     title: createTitle,
//     intro: createIntro
// }, {
//     id: createId(),
//     title: createTitle,
//     intro: createIntro
// }];

module.exports = createUserPosts;

