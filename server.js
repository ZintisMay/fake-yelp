const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

const app = express();
const PORT = 3000;

const log = console.log;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send("server root get");
})

app.post('/data', (req, res) => {
	log(req.body)
	log(req.body.name)
	res.send("server data post")
});

app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});