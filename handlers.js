function renderPage(req, res, route) {
  res.render(`./pages/${route}.ejs`);
}

function handleFourOhFour(req, res) {
  res.status(404).send('Page not Found!')
}

module.exports = {
  renderPage,
  handleFourOhFour
};
