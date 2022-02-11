export interface NamedEntity {
    name: string;
}

export interface Diagnosis extends NamedEntity {
    id: number;
    code: string;
    latin?: string;
}

export interface Patient extends NamedEntity {
    id: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
}
export type PlainEnglishDiagnosis = Omit<Diagnosis, 'latin'>;

export type NewDiagnosis = Omit<Diagnosis, 'id'>;

export type NewPatient = Omit<Patient, 'id'>;