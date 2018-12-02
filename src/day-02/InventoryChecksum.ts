const input = require('./input.json');

const checkChars = (val: string, exactMatch: number) => {
    const map = new Map();
    const chars = val.split('');
    chars.forEach((char) => {
        if (map.has(char)) {
            const count = map.get(char);
            map.set(char, count + 1);
        } else {
            map.set(char, 1);
        }
    });
    let check = false;
    map.forEach((v, k) => {
        if (v == exactMatch) {
            check = true;
        }
    });
    return check;
};

export const getChecksum = (boxIds: string[]): number => {
    let countTwos = 0;
    let countThrees = 0;
    boxIds.forEach(boxId => {
        if (checkChars(boxId, 2)) {
            countTwos = countTwos + 1;
        }
        if (checkChars(boxId, 3)) {
            countThrees = countThrees + 1;
        }
    });

    return countTwos * countThrees;
};

// console.log(getChecksum(input));

const compareString = (a: string, b: string) => {
    const aChars = a.split('');
    const bChars = b.split('');
    let returnValue = '';
    aChars.forEach((aChar, index) => {
        if (aChar === bChars[index]) {
            returnValue = returnValue + aChar;
        }
    });
    return {
        match: returnValue.length === a.length - 1,
        restId: returnValue
    }
};

export const getInformation = (boxIds: string[]): string => {
    let returnValue = '';
    for (let i = 0; i < boxIds.length; i++) {
        for (let j = i + 1; j < boxIds.length; j++) {
            const result = compareString(boxIds[i], boxIds[j]);
            if (result.match) {
                returnValue = result.restId;
            }
        }
    }

    return returnValue;
};

console.log(getInformation(input));