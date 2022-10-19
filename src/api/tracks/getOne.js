const database = require('../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query('select * from track where id = ?', [id])
    .then(([tracks]) => {
      if (tracks[0] != null) {
        res.json(tracks[0]);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
