import {Request, Response} from "express";
import {strings} from "../resources/strings";
import {Line} from "../entity/line.entity";
import {getDataSource} from "../data-source";

const {Router} = require('express');

const router = Router();

router.get('', async (req: Request, res: Response) => {
    const AppDataSource = await getDataSource();
    const lines = await AppDataSource.getRepository(Line).find();

    res.render('lines', {
        linesTitle: strings.lines,
        agenciesTitle: strings.agencies,
        lines: lines
    })
});

module.exports = router;