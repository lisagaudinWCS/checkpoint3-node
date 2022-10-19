const database = require('../database');

// router.get('/:id/tracks', getTracks);

module.exports = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query(
      'select * from album inner join track on album.id=track.id_album where album.id = ?',
      [id]
    )
    .then(([albums]) => {
      res.json(albums);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
