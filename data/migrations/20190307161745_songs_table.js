
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', (tbl) => {
      tbl.increments('song_id');
      tbl.string('song_name', 150).notNullable();
      tbl.integer('artist_id').unsigned();
      tbl.foreign('artist_id').references('artists.artist_id');
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('songs');
};
