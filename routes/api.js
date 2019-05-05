var express = require('express');
var router = express.Router();
var models = require('../models')
var whitelist = [process.env.API_CONSUMER_HOST]

router.get('/api/charges', function(req, res){
	let offset = req.query.offset;
	let limit = req.query.limit;

	let properties = (offset !== null && limit !== null) ? { limit: limit, offset: offset } : {};
    models.Charge.findAll(properties)
	    .then(result => {
	    	res.status(200).json(result);
		})
		.catch(err => {
			handleError(err, res);
		});
});

router.get('/api/charges/:chargeId', function(req, res){
    models.Charge.findByPk(req.params.chargeId)
	    .then(result => {
	    	result == null ? res.status(404).json({ status: 404, message: "Not found"}) : res.status(200).json(result.toJSON());
		})
		.catch(err => {
			handleError(err, res);
		});
});

router.post('/api/charges', function(req, res) {
	let charge = { description: req.body.description, amount: req.body.amount };

	models.Charge.create(charge)
		.then(result => {
			res.status(201).json({ status: 201, message: "Created"});
		})
		.catch(err => {
			handleError(err, res);
		});
});

router.delete('/api/charges/:chargeId', function(req, res) {
	models.Charge
		.destroy({ where: { id: req.params.chargeId }})
		.then(result => {
	    	result == 0 ? res.status(404).json({ status: 404, message: "Not found"}) : res.status(200).json(result);
		})
		.catch(err => {
			handleError(err, res);
		});
})

function handleError(error, response) {
	let errorsArray = [];

	error.errors.forEach(function(errorInstance) {
		errorsArray.push(errorInstance.message)
	});

	response.status(500).json({ status: 500, messages: errorsArray });
}

module.exports = router;
