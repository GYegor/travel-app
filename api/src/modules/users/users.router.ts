import express = require('express');
import wrap = require('../../common/errors/async-error-wrapper');

const router = express.Router();

router.post('/registration', wrap(async (req, res): Promise<void> => {
    console.log(req.body);
    res.json(req.body);
}));

export = router;