import {Request, Response} from "express";
import {strings} from "../resources/strings";
import {Agency} from "../entity/agency.entity";
import {getDataSource} from "../data-source";

const {Router} = require('express');

const router = Router();

router.get('', async (req: Request, res: Response) => {
    const AppDataSource = await getDataSource();
    const agencies = await AppDataSource.getRepository(Agency).find();

    res.render('agencies', {
        linesTitle: strings.lines,
        agenciesTitle: strings.agencies,
        agencies: agencies
    })
});

module.exports = router;