var express = require('express');
var app = express();


app.set("view engine", "pug");
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('homepage', { title: 'Accueil', message:'bonjour !' })
})

app.get('/liste', function (req, res) {
  res.render('liste', { title: 'liste', message:'pu....!' })
})

app.get('/nom/:first_name/:last_name', function (req, res) {
	var prenom = req.params.first_name;
	var nom = req.params.last_name;
    res.render('fiche',{title: "indentification", first_name: prenom, last_name: nom});
})

app.listen(8080); 
