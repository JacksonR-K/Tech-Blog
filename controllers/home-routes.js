const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: [ 'username' ]
                },
            ],
        });

        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one post
router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            // include: [
            //     {
            //         model: Post,
            //         attributes: [
            //             'id',
            //             'title',
            //             'content',
            //             'posted_date',
            //         ],
            //     },
            //     // {
            //     //     model: User,
            //     //     attributes: [
            //     //         'username'
            //     //     ],
            //     // },
            // ],
        });

        const post = dbPostData.get({ plain: true });
        res.render('dashboard', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;
