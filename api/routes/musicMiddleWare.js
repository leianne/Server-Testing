module.exports = {checkNewSong}

function checkNewSong(req, res, next){
    if(req.body.song_name) {
        next();
    } else {
        res.status(400).json({message: "Please enter a valid song name"})
    }
} 