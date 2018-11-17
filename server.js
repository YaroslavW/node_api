var express = require('express');
var app = express();

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

app.listen(3000, () => console.log("Server running on 3000 port"));
