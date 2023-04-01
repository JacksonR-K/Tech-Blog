const { Post } = require('../models');

const postData = [
    {
        title: 'MySql',
        content: 'MySql has lots of cool features!',
        postedDate: 'March 20, 2023 17:00:00',
        user_id: 1,
    },
    {
        title: 'JavaScript',
        content: 'JavaScript is loads of fun to work with!',
        postedDate: 'March 16, 2023 12:30:00',
        user_id: 1,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;