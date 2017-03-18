const express = require('express');
const router = express.Router();
const compModel = require('../models/compModel');
const gameModel = require('../models/gameModel');

router.route('/competition')
    .get((request, res) => {
        compModel.find({}, {}, (err, competitions) => {
            if (err) {
                return res.send(err);
            }
            res.send(competitions);
        });
    })
    .post((request, res) => {
        const comp = new compModel(request.body);
        comp.save((err, competitions) => {
            if (err) {
                return res.send(err);
            }
            return res.send(competitions);
        });
    })
    .delete((request, res) => {
        compModel.remove({ _id: request.body._id }, (err, competitions) => {
            if (err) {
                return res.send(err);
            }   
            return gameModel.remove({ comp_id: request.body._id }, (err, games) => {
                if (err) {
                    return res.send(err);
                }
                return res.send(competitions, games);
            });
        });
    })
    .put((request, res) => {
        compModel.findOneAndUpdate({ _id: req.body._id }, { $set: request.body }, (err, competitions) => {
            if (err) {
                return res.send(err);
            }
            res.send(competitions);
        });
    });
    
    
module.exports = router;