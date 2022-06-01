const User = require('../model/User');
const Sensor = require('../model/Sensor');

exports.update_config = function (req, res) {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }
    const nodeid = req.body.nodeid;
    User.find({node: {$elemMatch: nodeid}})
        .then(data => {
            if(!data){
                User.updateOne({ $push: { node: nodeid } });
                new Sensor ({ node: req.body.nodeid, sensors: req.body.config }),
                function (err, msg) {
                    if (err) {
                      res.send(err);
                    } else {
                      res.send({ message: "New Configuration Added" });
                    }
                  }
            }else{
                Sensor.updateOne({ node: req.body.nodeid, sensors: req.body.config }),
                function (err, msg) {
                    if (err) {
                      res.send(err);
                    } else {
                      res.send({ message: "Configuration Updated" });
                    }
                  }
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
};