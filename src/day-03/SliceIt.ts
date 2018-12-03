const input = require('./input.json');

export const doIOverlap = (claims: string[]) => {
    let data: number[][] | undefined = undefined;
    let dataMap: {[string:string]: string[]} = {};

    for (let i = 0; i < claims.length; i++) {
        let claim = claims[i];
        const [id, b, offset, area] = claim.split(' ');
        const [xOffset, yOffset] = offset.replace(/[^0-9,]/, '').split(',');
        const [unitX, unitY] = area.split('x');
        const intXOffset = parseInt(xOffset, 10);
        const intYOffset = parseInt(yOffset, 10);
        const edgeX = intXOffset + parseInt(unitX, 10);
        const edgeY = intYOffset + parseInt(unitY, 10);

        for (let y = 0; y < edgeY; y++) {
            for (let x = 0; x < edgeX; x++) {
                if (!data) {
                    data = []
                }
                if (!data[x]) {
                    data[x] = [];
                }

                if (!data[x][y]) {
                    data[x][y] = 0;
                }
                if (x >= intXOffset && x < edgeX && y >= intYOffset && y < edgeY) {
                    data[x][y] = data[x][y] + 1;
                    if (dataMap[`${x}_${y}`] && dataMap[`${x}_${y}`].length > 0) {
                        dataMap[`${x}_${y}`].push(id);
                    } else {
                        dataMap[`${x}_${y}`] = [id];
                    }
                }
            }
        }
    }
    let sum = 0;
    if (data) {
        for (let a = 0; a < data.length; a++) {
            sum = sum + data[a].filter(n => n > 1).length;
        }
    }
    let commonKeys: string[] = [];
    Object.keys(dataMap).forEach((key) => {
        if (dataMap[key].length > 1) {
            commonKeys.push(...dataMap[key]);
        }
    });
    // Unique Items in array
    const c = commonKeys.filter((value, index, array) => array.indexOf(value) === index);
    Object.keys(dataMap).forEach((key) => {
        if (dataMap[key].length == 1 && c.indexOf(dataMap[key][0]) < 0) {
            console.log(dataMap[key]);
        }
    });

    return sum;
};

console.log(doIOverlap(input));