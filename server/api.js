'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = require('../db/models').Campus;
const Students = require('../db/models').User;


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campuses', (req, res, next) => {
	Campus.findAll({})
	.then(campus => {
		res.send(campus)
	})
	.catch(next)
});

api.get('/students', (req, res, next) => {
	Students.findAll({ include: [Campus]})
	.then(students => {
		res.send(students)
	})
	.catch(next)
});

api.get('/students/:campusId', (req, res, next) => {
	Students.findAll({ include: [Campus], where: {campusId : req.params.campusId}})
	.then(students => {
		res.send(students)
	})
	.catch(next)
});

api.post('/students', (req, res, next) => {
	Students.create({name: req.body.name, email: req.body.email, campusId: req.body.campusId})
})

api.get('/students/student/:id/', (req, res, next) => {
	Students.findOne({where: {id : req.params.id}})
	.then(student => {
		res.send(student)
	})
	.catch(next)
})



api.delete('/students/student/:id', (req, res, next) => {
	const studentId = req.params.id
	Students.destroy({where: {id : studentId}})
	//destroy from db
	.then(() => res.status(204).end())
	.catch(next);
})


module.exports = api