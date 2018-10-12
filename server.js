const express = require('express');
const app = express();
const http = require('http').Server(app);

const PORT = 8080;

const routes = ['/home', '/cv', '/projects', '/blog', '/contact'];

app.use(express.static(__dirname + '/public/'));

// app.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/public/html/index.html');
// });

app.use((req, res) => {
	res.sendFile(__dirname + '/public/html/index.html');
});

// routes.map(route => {
// 	app.get(route, (req, res) => {
// 		res.send(route);
// 	});
// });

http.listen(PORT, () => {
	console.log('listening on *:' + PORT);
});