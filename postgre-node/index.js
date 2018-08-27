const pg = require('pg');
const pool = new pg.Pool({
  user: 'hkbhestn',
  host: 'elmer.db.elephantsql.com',
  database: 'hkbhestn',
  password: 'tcLWQlegNqQ3ruNKx_CfporyPyCNX3XE',
  port: '5432'
});

// pool.query('SELECT * FROM contractor', (err, res) => {
//   //console.log(err, res);
//   console.log(res.rows[0]._id); //shows rows(data we want) only
//   pool.end();
// });

pool.query('SELECT name, phone_number FROM subcontractor', (err, res) => {
  //console.log(err, res);
  console.log(res.rows); //shows rows(data we want) only
  // res.rows
  pool.end();
});