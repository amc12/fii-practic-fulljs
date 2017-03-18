const express = require('express');
const router = express.Router();
const gameModel = require('../models/gameModel');
const compModel = require('../models/compModel');

router.route('/game')
	.get((request, res) => {
		gameModel.find({}, {}, (err, games) => {
			if (err) {
				return res.send(err);
			}
			res.json(games);
		});
	})
    .post((request, res) => {
    	const game = new gameModel(request.body);
        game.save((err, games) => {
            if (err) {
                return res.send(err);
            }
            return res.send(games);
        });
    })
    .put((request, res) => {
        gameModel.findOneAndUpdate({ _id: request.body._id }, { $set: request.body }, (err, games) => {
            if (err) {
                return res.send(err);
            }
            return res.send(games);
        });
    });

router.route('/game/:id')
	.get((request, res) => {
		gameModel.findOne({ 'comp_id': request.params.id}, {}, (err, games) => {
            if (err) {
                return res.send(err);
            }
            return res.send(games);
        });
	});

module.exports = router;