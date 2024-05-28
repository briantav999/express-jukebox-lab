const express = require('express');
const router = express.Router();
const Track = require('../models/Track.js');

router.post('/', async (req, res) => {
    try {
        const createdTrack = await Track.create(req.body);
        res.json(createdTrack);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req,res)=>{
    try{
        const foundTracks = await Track.find()
        res.status(200).json(foundTracks)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


router.get('/:trackId', async (req,res)=>{
    try{
        const foundTrack = await Track.findById(req.params.trackId)
        res.status(200).json(foundTrack)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete('/:trackId', async (req,res)=>{
    try{
        const deleteTrack = await Track.findByIdAndDelete(req.params.trackId)
        res.status(200).json(deleteRecipe)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


router.put('/:trackId', async (req,res)=>{
    try{
        const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId)
        res.status(200).json(updatedTrack)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = router;
