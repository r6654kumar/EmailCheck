const express = require('express');
const fs = require('fs');
const app = express();
app.get('/track_open', (req, res) => {
  const email = req.query.email;
  const logEntry = `${new Date().toISOString()} - ${email}\n`;

  fs.appendFile('email_open_log.txt', logEntry, (err) => {
    if (err) console.error('Failed to log email open:', err);
  });
  res.sendFile(__dirname + '/1x1.png');
});

app.listen(3000, () => {
  console.log('Tracking server listening on port 3000');
});
