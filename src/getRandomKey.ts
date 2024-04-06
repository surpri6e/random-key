import { TComponentsOfKey } from './types';
import { getRandomNumber } from './utils/getRandomInt';

type TGetRandomKeySignature = (length: number, components: TComponentsOfKey) => string;

/**
    Generate new unique key
    @param {number} length length of your key
    @param {TComponentsOfKey} components additional information about your key

    @returns {string} unique key
*/
export const getRandomKey: TGetRandomKeySignature = (length, components) => {
    if (typeof length != 'number') {
        throw new TypeError('Length need be number');
    }

    if (typeof components != 'string' || (components != 'all' && components != 'letters' && components != 'numbers')) {
        throw new TypeError('Components must be "all", "letters" or "number"');
    }

    const lowerCaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
    const upperCaseLetters = lowerCaseLetters.toUpperCase();

    const alphabet = lowerCaseLetters + upperCaseLetters;

    const numbers = '0123456789';

    const alphabetWithNumbers = alphabet + numbers;

    let result = '';

    switch (components) {
        case 'all': {
            for (let i = 0; i < length; i++) {
                result += alphabetWithNumbers[getRandomNumber(0, alphabetWithNumbers.length - 1)];
            }

            break;
        }
        case 'letters': {
            for (let i = 0; i < length; i++) {
                result += alphabet[getRandomNumber(0, alphabet.length - 1)];
            }

            break;
        }
        case 'numbers': {
            for (let i = 0; i < length; i++) {
                result += numbers[getRandomNumber(0, numbers.length - 1)];
            }

            break;
        }
    }

    return result;
};
