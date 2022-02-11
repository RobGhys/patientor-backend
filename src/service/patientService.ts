import patients from '../../data/patients';
import {NewPatient, Patient, PatientsWithoutSsn,} from "../types";
const { v4: uuidv4 } = require('uuid');

const getPatients = (): Array<Patient> => {
    return patients;
};

const getPatientsWithoutSsn = (): PatientsWithoutSsn[] => {
    // Specifically exclude the unwanted fields
    return patients.map(({ id, dateOfBirth, name, gender, occupation}) => ({
        id,
        dateOfBirth,
        name,
        gender,
        occupation
    }));
};

const addPatient = ( patient: NewPatient ) : Patient => {
    let id = uuidv4();
    // Create a specific id, and take a copy of entry for other parameters
    const newPatient = {
        id: id,
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
    getPatients,
    addPatient,
    findById,
    getPatientsWithoutSsn
}