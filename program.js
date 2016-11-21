var express = require('express')
var app = express()

app.set('port', (process.argv[2] || 3000))
app.set('view engine', 'jsx')
app.set('views', __dirname + '/views')
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }))

require('babel/register')({
	ignore: false
})
var shoppingDetail = process.argv[3];
var haircutDetail = process.argv[4];

var data = [{title: "Shopping", detail: shoppingDetail},{title: "Hair cut", detail: haircutDetail}];

app.use('/', (req,res) => {
	res.render('index', {data: data})
})

app.listen(app.get('port'), () => {})
