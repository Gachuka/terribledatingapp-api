exports.up = function (knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.increments('id').primary();
      table.string('user').notNullable();
      table.string('email').notNullable();
      table.string('bio').notNullable();
      table.string('ascii_pic');
      table.boolean('question_1').notNullable();
      table.boolean('question_2').notNullable();
      table.boolean('question_3').notNullable();
      table.boolean('question_4').notNullable();
      table.boolean('question_5').notNullable();
      table.boolean('question_6').notNullable();
      table.boolean('question_7').notNullable();
      table.boolean('question_8').notNullable();
      table.boolean('question_9').notNullable();
      table.boolean('question_10').notNullable();
      table.boolean('question_11').notNullable();
      table.boolean('question_12').notNullable();
      table.boolean('question_13').notNullable();
      table.boolean('question_14').notNullable();
      table.boolean('question_15').notNullable();
      table.boolean('question_16').notNullable();
      table.boolean('question_17').notNullable();
      table.boolean('question_18').notNullable();
      table.boolean('question_19').notNullable();
      table.boolean('question_20').notNullable();
      table.boolean('question_21').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('save');
};
