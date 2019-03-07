const db = require('../dbConfig');
const music = require('./musicModel');

describe('music model', () => {
    it('should insert in a new song into the database', async () => {
        await music.addSong({ song_name: "Never Give Up", artist_id: 2 })
        await music.addSong({ song_name: "Say My Name", artist_id: 3 })
        
        const songs = await db('songs')
        expect(songs).toHaveLength(2)

    })
})