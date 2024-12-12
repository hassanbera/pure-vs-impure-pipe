import { ImpureDoublePipe } from './impure-double.pipe';

describe('ImpureDoublePipe', () => {
  it('create an instance', () => {
    const pipe = new ImpureDoublePipe();
    expect(pipe).toBeTruthy();
  });
});
