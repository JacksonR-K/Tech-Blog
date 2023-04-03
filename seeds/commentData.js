const { Comment } = require('../models');

const commentData = [
    {
        content: 'MySql has lots of cool features!',
        posted_date: new Date('2023-03-15'),
        post_id: 1,
        user_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;