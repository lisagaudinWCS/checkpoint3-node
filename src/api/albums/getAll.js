const database = require('../database');

module.exports = (req, res) => {
  database
    .query('select * from album')
    .then(([albums]) => {
      res.json(albums);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
