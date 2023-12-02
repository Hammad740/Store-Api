const notFound = (req, res) =>
  res
    .status(404)
    .send(
      `<h2>Following resource does not exist</h2><a href='/api/v1/products'>Products route</a>`
    );

module.exports = notFound;
