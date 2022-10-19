const database = require('../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query('delete from album where id = ?', [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error deleting the album');
    });
};
