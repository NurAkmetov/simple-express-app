import {Request, Response} from "express";
import {strings} from "../resources/strings";

const {Router} = require('express');

const router = Router();

router.get('', (req: Request, res: Response) => {
    res.render('main', {
        title: strings.lineList,
        message: strings.lineList,
        products: [{id: 1, name: 'ss'}, {id: 2, name: 'sdsd'}]
    })
});

module.exports = router;