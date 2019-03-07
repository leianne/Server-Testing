
exports.up = function(knex, Promise) {
    return knex.schema.createTable('artists', (tbl) => {
        tbl.increments('artist_id');
        tbl.string('artist_name', 150).notNullable().unique();
        tbl.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('artists')
  };