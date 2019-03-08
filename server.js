const fs = require('fs');
const express = require('express');

const privateKey = fs.readFileSync('sslcert/host.key', 'utf8');
const certificate = fs.readFileSync('sslcert/host.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const app = express();

const PORT = 80;

app.use(express.static(__dirname + '/public/'));

app.use((req, res) => {
	res.sendFile(__dirname + '/public/html/index.html');
});

// app.get('/', (req, res) => {
//	res.send('hello world');
// });

// routes.map(route => {
// 	app.get(route, (req, res) => {
// 		res.send(route);
// 	});
// });

// TODO: get https working with a verified ssl cert
// const https = require('https').createServer(credentials, app);

const http = require('http').createServer(app);
http.listen(PORT, () => {
	console.log('listening on *:' + PORT);
});
