const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

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
            include: [
                {
                    model: User,
                    attributes: [
                        'username'
                    ],
                },
            ],
        });

        const post = dbPostData.get({ plain: true });
        res.render('post', { 
            post, 
            loggedIn: req.session.loggedIn,
            viewPost: true //Value used in main.handlebars to check which button to display ("+ New Post" or "+ Comment")
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET all posts for dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: [ 'username' ]
                },
            ],
            where: {
                user_id: req.session.user_id
            }
        });

        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            dashboard: true //Value used in main.handlebars to check which title to display ("The Tech Blog" or "Your Dashboard")
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Create new post route
router.get('/create', withAuth, (req, res) => {
    res.render('new-post');
});

//Add comment route
router.get('/comment', withAuth, (req, res) => {
    res.render('new-comment');
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
