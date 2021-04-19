import 'mocha';
import {expect} from 'chai';
import {DivReduce} from '../src/DivReduce';

describe('ProdReduce', () => {
  it('ProdReduce([1,2,3,4]) returns 24', () => {
    expect(new DivReduce([20,2,5]).reduce()).to.equal(2);
  });

});