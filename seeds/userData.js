const { User } = require('../models');

const userData = [
    {
        username: 'J4v4ScriptGuy',
        email: 'jsGuy@gmail.com',
        password: 'c0de4LYfe',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;