var express = require('express');
var http = require('http');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

app.get('/', (req, res, next) => {
          res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

const server = http.createServer(app);
server.listen(PORT);
