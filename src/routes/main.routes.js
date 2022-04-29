import express from 'express';
import multer from 'multer';
import { multerConfig } from '../config/multer.config.js';
import Post from '../models/Post.schema.js';

const routes = express.Router();

routes.get('/', async (req, res) => {
    return res.json({
        message: 'Nossa API está funcionando!',
    });
});

routes.get('/posts', async (req, res) => {
    const posts = await Post.find();
    return res.json(posts);
});

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    const { 
        originalname: name, 
        size, 
        filename: key,
        location: url = '',
    } = req.file;

    const post = await Post.create({
        name,
        size,   
        key,
        url,
    });

    if(!post) throw new Error('Error creating post');

    return res.json({ sucess: true, payload: post });
});

routes.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    post.remove();
    res.send({ sucess: true, message: 'Post deleted' });
});

export default routes;