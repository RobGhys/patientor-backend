import { NewDiagnosis } from './types';

// Unknown --> don't yet need to define the type to match any type, but can first verify the type and then confirm the expected type
type Fields = { latin: unknown, code: unknown, name: unknown };

const toNewDiagnosis = ({ latin, code, name } : Fields): NewDiagnosis => {
    const newDiagnosis: NewDiagnosis = {
        latin: parseLatin(latin),
        code: parseCode(code),
        name: parseName(name)
    };

    return newDiagnosis;
};

const parseCode = (code: unknown): string => {
    if (!code || !isString(code)) {
        throw new Error('Incorrect or missing code');
    }

    return code;
};

const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing code');
    }

    return name;
};

const parseLatin = (latin: unknown): string => {
    if (!latin || !isString(latin)) {
        throw new Error('Incorrect or missing code');
    }

    return latin;
};

// Need 2 forms of check to recognize a string created via '=' or via 'new String(...)'
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

/*const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};*/

/****************************
 *          Exports         *
 ****************************/
export default toNewDiagnosis;