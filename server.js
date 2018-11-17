var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var pets = [
	{
		id:1,
		name:"Cat"
	},
	{
		id:2,
		name:"Dog"
	},
	{
		id:3,
		name:"Hamster"
	}
];
app.get('/',(req, res) => res.send('Hello API'));

app.get('/pets', (req, res) => res.send(pets));

app.get('/pets/:id', (req, res) => {
	var pet = pets.find(pet =>{
		return pet.id === Number(req.params.id);
	});
	res.send(pet)
});

app.post('/pets', (req, res) => { 
	// console.log(req.body);
	var pet = {
		id: Date.now(),
		name: req.body.name
	}
	pets.push(pet);
	res.send(pet);
});

app.put('/pets/:id' , (req, res) =>{
		var pet = pets.find(pet =>{
		return pet.id === Number(req.params.id);
	});
		pet.name = req.body.name;
		res.sendStatus(200);
});

app.delete('/pets/:id', (req, res) =>{
	pets = pets.filter( pet =>{
		return pet.id !== Number(req.params.id);
	});
	res.sendStatus(200);
})

app.listen(3000, () => console.log("Server running on 3000 port"));
