import {doIOverlap} from './SliceIt';
import {expect} from 'chai';

describe.only('SliceIt', () => {
   it('for this I have 4 unit area overlapping', () => {
     const claims = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
       expect(doIOverlap(claims)).to.be.eql(4);
   });
});