import patients from '../../data/patients';
import {NewPatient, Patient, PatientsWithoutSsn,} from "../types";

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
    // Create a specific id, and take a copy of entry for other parameters
    const newPatient = {
        id: Math.floor(Math.random() * (999999 - 1 + 1)) + 1,
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