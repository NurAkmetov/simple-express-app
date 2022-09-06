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

router.get('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    const parsedId = parseInt(id);
    const AppDataSource = await getDataSource();
    const line = await AppDataSource.getRepository(Line).findOneBy({id: parsedId});

    res.render(`line`, {
        linesTitle: strings.lines,
        agenciesTitle: strings.agencies,
        line: line
    })
});

module.exports = router;