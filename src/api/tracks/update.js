const database = require('../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, youtube_url, id_album } = req.body;

  database
    .query(
      'update track set title = ?, youtube_url = ?, id_album = ? where id = ?',
      [title, youtube_url, id_album, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing the track');
    });
};
