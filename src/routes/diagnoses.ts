import express from 'express';
import diagnosisService from "../service/diagnosisService";

const router = express.Router();

import toNewDiagnosis from '../utils';

/************************
 *          GET         *
 ************************/
router.get('/', (_req, res) => {
    res.send(diagnosisService.getEntries());
});

router.get('/:id', (req, res) => {
    const diagnosis = diagnosisService.findById(Number(req.params.id));

    if (diagnosis) {
        res.send(diagnosis);
    } else {
        res.sendStatus(404);
    }
})

/************************
 *         POST         *
 ************************/
router.post('/', (req, res) => {
    try {
        const newDiagnosis = toNewDiagnosis(req.body);
        const addedDiagnosis = diagnosisService.addDiagnosis(newDiagnosis);
        res.json(addedDiagnosis);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;