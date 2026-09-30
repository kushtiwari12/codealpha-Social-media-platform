const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <h1>System Status: ONLINE</h1>
    <p><b>Server Deployed Successfully</b></p>
    <p>Port: 3000 | Status Code: 200 OK</p>
    <p>Environment: Production Ready</p>
    <p>Build: Stable</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});