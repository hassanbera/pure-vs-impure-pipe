import { PureDoublePipe } from './pure-double.pipe';

describe('PureDoublePipe', () => {
  it('create an instance', () => {
    const pipe = new PureDoublePipe();
    expect(pipe).toBeTruthy();
  });
});
