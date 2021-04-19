import 'mocha';
import {expect} from 'chai';
import {SubReduce} from '../src/SubReduce';

describe('SubReduce', () => {
  it('SubReduce([1,2,3,4]) returns -10', () => {
    expect(new SubReduce([1,2,3,4]).run()).to.equal(-10);
  });

});