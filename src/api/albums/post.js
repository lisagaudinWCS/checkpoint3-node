const database = require('../database');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;

  database
    .query(
      'insert into album (title, genre, picture, artist) values (?, ?, ?, ?)',
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.location(`/api/albums/${result.insertId}`).status(201).json({
        id: result.insertId,
        title: title,
        genre: genre,
        picture: picture,
        artist: artist,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the new album');
    });
};
