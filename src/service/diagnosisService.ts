import diagnoses from '../../data/diagnoses';
import { NewDiagnosis, PlainEnglishDiagnosis, Diagnosis } from "../types";

const getEntries = (): Array<Diagnosis> => {
    return diagnoses;
};

const getPlainEnglishDiagnoses = (): PlainEnglishDiagnosis[] => {
    // Specifically exclude the unwanted fields (comment in this case)
    return diagnoses.map(({ id, code, name}) => ({
        id,
        code,
        name,
    }));
};

const addDiagnosis = ( diagnosis: NewDiagnosis ) : Diagnosis => {
    // Create a specific id, and take a copy of entry for other parameters
    const newDiagnosis = {
        id: Math.max(...diagnoses.map(d => d.id)) + 1,
        ...diagnosis
    }

    diagnoses.push(newDiagnosis);

    return newDiagnosis;
};

const findById = (id: number): Diagnosis | undefined => {
    const entry = diagnoses.find(diagnosis => diagnosis.id === id);

    return entry;
};

export default {
    getDiagnoses: getEntries,
    addDiagnosis,
    getPlainEnglishDiagnoses,
    findById
}