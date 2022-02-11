import {NewDiagnosis, NewPatient} from './types';

// Unknown --> don't yet need to define the type to match any type, but can first verify the type and then confirm the expected type
//type Fields = { latin: unknown, code: unknown, name: unknown };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewDiagnosis = (object: any): NewDiagnosis => {
    const newDiagnosis: NewDiagnosis = {
        code: parseString(object.code),
        name: parseString(object.name)
    };

    return newDiagnosis;
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

export const toNewPatient = (object: any): NewPatient => {
    const newPatient: NewPatient = {
        name: parseString(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn),
        gender: parseString(object.gender),
        occupation: parseString(object.occupation)
    };

    return newPatient;
};

/****************************
 *          Exports         *
 ****************************/
export default toNewDiagnosis;