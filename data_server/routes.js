const express = require("express");
const router = express.Router();

const {Books, People} = require("./data");

router.get('/', (req, res)=> {
    res.send({
        message : "Success!"
    });
});

router.get('/books', (req,res) => {
    res.send({
        status : "success",
        data : Books
    });
});

router.get('/people', (req,res) => {
    res.send({
        status : "success",
        data : People
    });
});

module.exports = router;