const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser'); // 2021년 이후 express에 기본 포함 (안써도 됌)
app.use(bodyParser.urlencoded({extended: true})) // 요청(req)에서 body를 가져올 때 undefined를 막기위해 사용한다.
// app.use(express.json) // express에서 제공하는 것으로 bodyParser를 따로 쓰지 않아도 요청에서 body를 불러올 수 있다.

app.use(express.static(path.join(__dirname, 'stock-react/build')))

const port = process.env.PORT || 5000;

app.use(express.json());
var cors = require('cors');
app.use(cors());


const http = require('http').createServer(app);
http.listen(port, function(){
    console.log('listening on ' + port)
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'stock-react/build/index.html'))    
})

app.get('/api', function(req, res){
    res.send("Hello world");
})
