const router = require('express').Router();
const { Post, Comment } = require('../../models');

// Import the custom middleware
const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/new', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id 
    });
    
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new comment
router.post('/comment', withAuth, async (req, res) => {
    try {
      const dbPostData = await Comment.create({
        content: req.body.content,
        post_id: req.body.post_id
      });
      
      res.status(200).json(dbPostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  


module.exports = router;