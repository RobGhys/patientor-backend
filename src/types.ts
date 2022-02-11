export interface Diagnosis {
    id: number,
    code: string;
    name: string;
    latin?: string;
}

export type PlainEnglishDiagnosis = Omit<Diagnosis, 'latin'>;

export type NewDiagnosis = Omit<Diagnosis, 'id'>;