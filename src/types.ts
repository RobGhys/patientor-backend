export interface Diagnosis {
    id: number;
    name: string;
    code: string;
    latin?: string;
}

export interface Patient {
    id: number;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
}
export type PlainEnglishDiagnosis = Omit<Diagnosis, 'latin'>;

export type NewDiagnosis = Omit<Diagnosis, 'id'>;

export type NewPatient = Omit<Patient, 'id'>;

export type PatientsWithoutSsn = Omit<Patient, 'ssn'>;