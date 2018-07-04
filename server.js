const express = require('express'),
	app = express()

const dev = app.get('env') !== 'production'
const PORT = process.env.PORT || 8080

app.listen(PORT,() => {
	console.log("Listening on Port:%s",PORT)
	console.log("Stop with Ctrl+C");
});

if (!dev) {
    console.log('Production')
    app.disable('x-powered-by')
    app.use(express.static(__dirname + '/frontend/build'));
    app.get('*', (req, res) => res.sendFile(__dirname + '/frontend/build/index.html'));
}

if (dev) {
    console.log('Development')
    app.use(express.static(__dirname + '/frontend/public'));
    //CORS
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        next();
    });
}

//Port 8080
app.listen(PORT, () => {
    console.log("server listening on port", PORT);
});