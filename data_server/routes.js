const express = require("express");
const router = express.Router();

const {Books, People} = require("./data");

router.get('/', (req, res)=> {
    return res.send({
        message : "Success!"
    });
});

router.get('/books', (req,res) => {
    return res.send({
        status : "success",
        data : Books
    });
});

router.post('/books', (req, res) => {
    console.log(req.body);
    if(req.body.title && req.body.author)
    {
        Books.books.push({
            id : Books.counts+1,
            ...req.body
        });
        Books.counts += 1;
        return res.send({
            status : "success"
        })
    }
    else 
    {
        return res.send({
            status : "failed"
        })
    }
})

router.get('/people', (req,res) => {
    return res.send({
        status : "success",
        data : People
    });
});

router.post('/people', (req, res) => {
    console.log(req.body);
    if(req.body.name && req.body.age && typeof req.body.age == "number")
    {
        People.people.push({
            id : People.counts+1,
            ...req.body
        });
        People.counts += 1;
        return res.send({
            status : "success"
        })
    }
    else 
    {
        return res.send({
            status : "failed"
        })
    }
})

module.exports = router;