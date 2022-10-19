const database = require('../database');

module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  database
    .query(
      'insert into track (title, youtube_url, id_album) values (?, ?, ?)',
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      res.location(`/api/tracks/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the new track');
    });
};
