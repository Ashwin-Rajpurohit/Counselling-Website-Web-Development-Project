const express = require('express');
const Model = require('./model');
const router = express.Router();

// API for getting all feedbacks(Read)
router.get('/getAllFeedbacks', async (req, res)=>{
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error})
    }
})

//API to get feedback by id(Read)
router.get('/getOneFeedback/:id', async (req, res)=>{
    try{
        const data = await Model.findById(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error})
    }
})

//API to post feedback(Create)
router.post('/postFeedback', async (req, res)=>{
    const data =new Model({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        description: req.body.description
    });

    try{
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//API to patch feedback(Update) 
router.patch('/patchFeedback/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const dataToUpdate =req.body
        const options = {new:true}

        const result= await Model.findByIdAndUpdate(id,dataToUpdate,options)
        res.send(result)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//API to delete feedback(Delete)
router.delete('/deleteFeedback/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const data =await Model.findByIdAndDelete(id)
        res.send('Document deleted Successfully')
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router;