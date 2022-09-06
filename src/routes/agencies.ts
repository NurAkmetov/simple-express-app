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
        agencies: agencies,
        id: strings.id,
        name: strings.name,
        region: strings.region
    })
});

router.get('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    const parsedId = parseInt(id);
    const AppDataSource = await getDataSource();
    const agency = await AppDataSource.getRepository(Agency).findOneBy({id: parsedId});

    res.render(`agency`, {
        linesTitle: strings.lines,
        agenciesTitle: strings.agencies,
        agency: agency,
        id: strings.id,
        name: strings.name,
        region: strings.region
    })
});

module.exports = router;