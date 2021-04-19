import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../src/AddReduce';

describe('AddReduce', () => {
  it('AddReduce([1,2,3,4]) returns 10', () => {
    expect(new AddReduce([1,2,3,4]).reduce()).to.equal(10);
  });

});