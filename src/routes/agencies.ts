import {Request, Response} from "express";
import {strings} from "../resources/strings";

const {Router} = require('express');

const router = Router();

router.get('', (req: Request, res: Response) => {
    res.render('agencies', {
        linesTitle: strings.lines,
        agenciesTitle: strings.agencies,
        agencies: [{id: 1, name: 'ss'}, {id: 2, name: 'sdsd'}]
    })
});

module.exports = router;