export const calibration = (calibration: number[], intiFrequency = 0) =>
  calibration.reduce((prevNumber, currentNumber) => {
    return prevNumber + currentNumber;
  }, intiFrequency);

const content = require('./input.json');
// console.log(calibration(content));

export const getRepeatFrequency = (frequencies: number[], initFrequency = 0) => {
  let sum = initFrequency;
  let seenFrequencies = [0];
  let index = 0;
  while(seenFrequencies.filter(n => n === sum).length < 2) {
    sum = sum + frequencies[index % frequencies.length];
    seenFrequencies.push(sum);
    index++;
  }
  return sum;
};

// console.log(getRepeatFrequency(content));

