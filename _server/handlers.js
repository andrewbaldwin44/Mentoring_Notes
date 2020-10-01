const { NOTES, GENERAL_NOTES } = require('./constants');

function renderPage(req, res, route, pageData) {
  res.render(`./pages/${route}.ejs`, pageData);
}

function renderNotes(req, res, route) {
  const notesData = NOTES[route];
  const generalNotesData = GENERAL_NOTES[route];

  renderPage(req, res, route, { notesData, generalNotesData });
}

function handleFourOhFour(req, res) {
  res.status(404).send('Page not Found!')
}

module.exports = {
  renderPage,
  renderNotes,
  handleFourOhFour
};
