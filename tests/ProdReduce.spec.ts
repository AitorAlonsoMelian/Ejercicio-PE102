import 'mocha';
import {expect} from 'chai';
import {ProdReduce} from '../src/ProdReduce';

describe('ProdReduce', () => {
  it('ProdReduce([1,2,3,4]) returns 24', () => {
    expect(new ProdReduce([1,2,3,4]).reduce()).to.equal(24);
  });

});