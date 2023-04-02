const { Post } = require('../models');

const postData = [
    {
        title: 'MySql',
        content: 'MySql has lots of cool features!',
        posted_date: new Date('2023-03-14'),
        user_id: 1,
    },
    {
        title: 'JavaScript',
        content: 'JavaScript is loads of fun to work with!',
        posted_date: new Date('2023-03-20'),
        user_id: 1,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;