import patients from '../../data/patients';
import { NewPatient, Patient } from "../types";

const getEntries = (): Array<Patient> => {
    return patients;
};

const addPatient = ( patient: NewPatient ) : Patient => {
    // Create a specific id, and take a copy of entry for other parameters
    const newPatient = {
        id: Math.max(...patients.map(d => d.id)) + 1,
        ...patient
    }

    patients.push(newPatient);

    return newPatient;
};

const findById = (id: number): Patient | undefined => {
    const entry = patients.find(patient => patient.id === id);

    return entry;
};

export default {
    getEntries,
    addPatient,
    findById
}