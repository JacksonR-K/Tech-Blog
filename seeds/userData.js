const { User } = require('../models');

const userData = [
    {
        username: 'J4v4ScriptGuy',
        email: 'jsGuy@gmail.com',
        password: '$2b$10$2wIL6nemoufd4R.WE6QO7esdA6GLGcEG6tAIan5.ZQFyxjUEPog1m',
    },
    {
        username: 'codeGuy36',
        email: 'coder36@gmail.com',
        password: '$2b$10$Bo17WxYKPOEqpyJaVdVRIenoqir.AkCkJ57kZ.H6Prc6zmgnEff7W',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;