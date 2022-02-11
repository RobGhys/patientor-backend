import {Genre, NewDiagnosis, NewPatient} from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toNewDiagnosis = (object: any): NewDiagnosis => {
    const newDiagnosis: NewDiagnosis = {
        code: parseString(object.code),
        name: parseString(object.name)
    };

    return newDiagnosis;
};

export const toNewPatient = (object: any): NewPatient => {
    const newPatient: NewPatient = {
        name: parseString(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn),
        gender: parseGenre(object.gender),
        occupation: parseString(object.occupation)
    };

    return newPatient;
};

const parseString = (str: unknown): string => {
    if (!str || !isString(str)) {
        throw new Error('Incorrect or missing code');
    }

    return str;
};

// Need 2 forms of check to recognize a string created via '=' or via 'new String(...)'
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseGenre = (genre: unknown): Genre => {
    if (!genre || !isGenre(genre)) {
        throw new Error('Incorrect or missing genre: ' + genre);
    }

    return genre;
}

const isGenre = (param: any): param is Genre => {
    return Object.values(Genre).includes(param);
}