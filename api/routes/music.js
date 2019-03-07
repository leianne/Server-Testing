const express = require('express');
const db = require('../../data/music/musicModel');
const router = express();
const { checkNewSong } = require('./musicMiddleWare');

router.get('/songs', async (req, res) => {
    try{
        const songs = await db.getSongs();
        if(songs.length > 0) {
            res.status(200).json(songs)
        } else {
            res.status(400).json({message: 'There are no songs in the database go add some'})
        }
    }
    catch(error){
        res.status(500).json({message: "Internal Error"})
    }
} )

router.post('/songs', checkNewSong, async (req, res) => {
    const song = req.body;
    try {
        const newSong = await db.addSong(song)
        if(newSong) {
            res.status(201).json({message: 'Song created', newSong})
        }

    }
    catch(error){
        res.status(500).json({message: "Internal Error"})
    }
})
module.exports = router;