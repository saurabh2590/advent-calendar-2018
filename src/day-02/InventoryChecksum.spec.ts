import {expect} from 'chai';
import {getChecksum, getInformation} from './InventoryChecksum';
describe('Checksum', () => {
    it('for ["abcdef", "bababc", "abbcde", "abcccd", "aabcdd", "abcdee", "ababab"]', () => {
       expect(getChecksum(["abcdef", "bababc", "abbcde", "abcccd", "aabcdd", "abcdee", "ababab"])).to.be.eql(12);
    });

    it('for ["abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"]', () => {
        expect(getInformation(["abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"])).to.be.eql('fgij');
    });
});