import postMessage from './models/postMassage.js'
import mongoose from 'mongoose';
export const getPost = async (req, res) => {
    
    try {
        const PostMessage = await postMessage.find();
    
        res.status(200).json(PostMessage);
    } catch (error) {
        res.status(404).json({message:error.message}); 
    }
}
export const createPost = async(req, res) => {
    const post = req.body
    const newPost = new postMessage(post) 
    
    try {
        await newPost.save();
        res.status(201).json(newPost); 
    } catch (error) {
        res.status(409).json({message:error.message}); 
    }
}   
export const updatePost=async(req,res)=>{
    const { id } = req.params;  
    const { date, time, place,  topic,teacher } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {  date, time, place,  topic,teacher, _id: id };

    await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);

}