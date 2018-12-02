import {calibration, getRepeatFrequency} from './ChronalCalibration';
import {expect} from 'chai';

describe('Calibration for ', () => {
  it('[+1, -2, +3, +1]', () => {
    expect(calibration([+1, -2, +3, +1])).to.be.eql(3);
  });

  it('[+1, +1, +1]', () => {
    expect(calibration([+1, +1, +1])).to.be.eql(3);
  });

  it('[+1, +1, -2]', () => {
    expect(calibration([+1, +1, -2])).to.be.eql(0);
  });
  it('[-1, -2, -3]', () => {
    expect(calibration([-1, -2, -3])).to.be.eql(-6);
  });
});

describe('Repeat for ', () => {
  it('[+1, -2, +3, +1]', () => {
    expect(getRepeatFrequency([+1, -2, +3, +1])).to.be.eql(2);
  });

  it('[+1, -1]', () => {
    expect(getRepeatFrequency([+1, -1])).to.be.eql(0);
  });

  it('[+3, +3, +4, -2, -4]', () => {
    expect(getRepeatFrequency([+3, +3, +4, -2, -4])).to.be.eql(10);
  });

  it('[-6, +3, +8, +5, -6]', () => {
    expect(getRepeatFrequency([-6, +3, +8, +5, -6])).to.be.eql(5);
  });

  it('[+7, +7, -2, -7, -4]', () => {
    expect(getRepeatFrequency([+7, +7, -2, -7, -4])).to.be.eql(14);
  });

});
