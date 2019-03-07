const db = require('../dbConfig');
module.exports = {
    addSong,
    getSongs,
}

async function addSong(artist) {
    const [id] = await db('songs').insert(artist)
    return db('songs').where({song_id: id}).first()
}

function getSongs() {
    return db('songs')
}