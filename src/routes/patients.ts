import express from 'express';
import patientService from '../service/patientService';

const router = express.Router();

import { toNewPatient } from '../utils';

/************************
 *          GET         *
 ************************/
router.get('/', (_req, res) => {
    res.send(patientService.getPatients());
});

router.get('/:id', (req, res) => {
    const diagnosis = patientService.findById(Number(req.params.id));

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
        const newPatient = toNewPatient(req.body);
        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;