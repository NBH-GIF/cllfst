const Joi = require ('joi');
let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use( express.static( "views/images" ) );
app.use( express.static( "views/assets" ) );
app.use(express.json());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.render('pages/index.ejs');
});

app.get('/cll', function (req, res) {
  res.redirect('http://cllfst.org.tn');
});

app.get('/WelcomeToCll', function (req, res) {
  res.render('pages/index.ejs');
});

app.get('/JoinUs', function (req, res) {
  res.redirect('https://docs.google.com/forms/d/e/1FAIpQLSeXWhomi-OMqbIaqlJP1utojO2iEFrQWqFMyTe7XIgjc-VMhQ/viewform?fbzx=5954027571900860173');
});

app.get('/Who_We_are?', function (req, res) {
  res.render('pages/about.ejs');}) ;


app.get(('/contact'),(req, res) => {res.render('pages/contact.ejs')
  });
  
 app.post (('/contact'),(req, res) => {
  var name = req.body.firstname + ' ' + req.body.lastname;
  const { error } = validate(req.body); 
  if (error) {
     return res.send(error.details[0].message);
  }
  else {
  var name = req.body.firstname + ' ' + req.body.lastname;
  res.send(name + ' Submitted Successfully!');}
});
function validate(firstname,lastname,email,subject) {
  const schema = Joi.object ({
      
      firstname : Joi.string().min(3).required(),
      lastname : Joi.string().min(3).required(),
      email : Joi.string().required().email(),
      subject : Joi.string().min(15).required()

  });
  return schema.validate(firstname,lastname,email, subject);

};



 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
 
    console.log(" app listening at http://%s:%s", host, port)});